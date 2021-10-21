//amqp
const rabbitmq = {
  protocol: 'amqp',
  hostname: 'localhost',
  port: 5672,
  username: 'dream',
  password: '231510622abc',
  locale: 'en_US',
  frameMax: 0,
  heartbeat: 0,
  vhost: '/',
};

const publish = (keyword="test",msg = {})=>{
    const exchange = 'amq.topic';
    const queue = `${keyword}_queue`;
    require('amqplib/callback_api').connect(rabbitmq, function(error, connection) {
      if (error) throw error;
      //创建信道
      connection.createChannel(function(error, channel) {
        if (error) throw error;
        //声明队列
        channel.assertQueue(queue, {
          //持久化
          durable: true,      //是否持久化    (rabbitmq 宕机重启时是否有效)
          autoDelete: false,  //是否自动删除  (消息消费者断开时，是否删除队列，相对客户端)
          exclusive:false,    //是否排他      (只有第一次创建的连接有效）
        });
        //绑定
        channel.bindQueue(queue, exchange, keyword);
        channel.publish(exchange, keyword, Buffer.from(JSON.stringify(msg)));
      });
      //0.5秒后关闭连接
      setTimeout(function() {
        connection.close();
      }, 500);
  });
}

// Consumer
const consumer = (keyword="test",callback)=>{
  const exchange = 'amq.topic';
  const queue = `${keyword}_queue`;
  require('amqplib/callback_api').connect(rabbitmq, function(error, connection) {
    if (error) throw error;
    //创建信道
    connection.createChannel(function(error, channel) {
      if (error) throw error;
      //声明队列
      channel.assertQueue(queue, {
        //持久化
        durable: true,      //是否持久化    (rabbitmq 宕机重启时是否有效)
        autoDelete: false,  //是否自动删除  (消息消费者断开时，是否删除队列，相对客户端)
        exclusive:false,    //是否排他      (只有第一次创建的连接有效）
      });
      channel.bindQueue(queue, exchange, keyword);
      channel.get(queue,{noAck:true}, callback);
    });
    //0.5秒后关闭连接
    setTimeout(function() {
      connection.close();
    }, 500);
  });
}

module.exports = {
  publish,
  consumer,
}