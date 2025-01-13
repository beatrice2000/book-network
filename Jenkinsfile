pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                // Clonează repository-ul Git
                checkout scm
            }
        }
        stage('Build') {
            steps {
                // Construiește aplicația cu Maven
                bat 'mvn clean package'
            }
        }
        stage('Build Docker Image') {
            steps {
                // Construiește imaginea Docker
                bat 'docker build -t book-network .'
            }
        }
        stage('Run Docker Container') {
            steps {
                // Rulează containerul Docker
                bat 'docker run -d -p 8088:8088 book-network'
            }
        }
    }
}
