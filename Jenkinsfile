pipeline {
    agent none

    stages {
        stage('Build') {
            agent {
                dockerfile true
            }
            
            steps{     
                 echo 'Build..'
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