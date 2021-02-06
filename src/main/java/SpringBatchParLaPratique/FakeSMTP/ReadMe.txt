git clone https://github.com/Nilhcem/FakeSMTP.git
cd FakeSMTP
mvn clean install -DskipTests
mvn package
java -jar target/fakeSMTP-2.1-SNAPSHOT.jar
