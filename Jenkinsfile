pipeline {
    agent any

    stages {
        stage('Build') {
            
            
            steps{
                sh '''
                docker build -t latest .
                '''
                
            }
        }
        stage('Test') {
            agent{
                docker {image 'node:8-alpine'}
            }
            steps{
                sh 'npm install'
                sh 'npm test --watchAll=false'
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploy'
            }
        }
    }
}