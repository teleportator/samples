#### Read single message from HttpLogMessage Kafka topic
<code>
  ./kafka-console-consumer.sh --bootstrap-server http://k2.int.retailrocket.ru:9092 --topic HttpLogMessage --from-beginning --max-messages 1
</code>
