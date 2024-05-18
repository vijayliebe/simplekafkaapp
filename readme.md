# Overview
This tool aids in grasping the fundamental principles of Kafka, encompassing the functions of the broker, admin, producer, and consumer.
Apache Kafka is a distributed streaming platform designed to construct real-time data pipelines and streaming applications. It offers horizontal scalability, fault tolerance, and exceptional speed, making Kafka an ideal choice for various applications such as real-time analytics, data integration, and crucial applications.

# Execution Procedure
1. Docker commands for zookeeper & kakka
```
docker run -p 2181:2181 zookeeper


docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```
2. `npm i`
3. `node admin.js`
4. `node producer.js <rider_name> <region>`
5. `node consumer.js <group_name>` 


# Links
- https://www.openlogic.com/blog/using-kafka-zookeeper 

# Summary
```
Broker 
    clientId
    broker_list
    
admin
    Broker
    Topic
    numPartitions
    
Producer
    topic
    partition

Consumer
    topic
    group_id
    partition - as per auto-balancing


Partition - consumer => 1:1 relationship i.e. A partition will max connected to 1 consumer
consumer - Partition => 1:many i.e. one consumer may connected to multiple partition
```