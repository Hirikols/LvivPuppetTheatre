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
            steps{
                echo 'Test..'
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploy'
            }
        }
    }
}