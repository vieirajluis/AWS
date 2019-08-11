package com.weclouddataweekone.demo;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.EncryptionMaterialsProvider;
import com.amazonaws.services.s3.model.KMSEncryptionMaterialsProvider;

public class S3Client {
    public static void main(String[] args) {
        AWSCredentials credentials = new BasicAWSCredentials(
                "YOUR Access key ID", "YOUR Secret access key");

        EncryptionMaterialsProvider encryptionMaterialsProvider = new KMSEncryptionMaterialsProvider(
                "arn:aws:kms:XXXXXXXXXXX"); //user kms policy

        AmazonS3 client = new AmazonS3Client(credentials);

        client.putObject("bucketname", "java-s3client-demo.txt", "test"); //bucket name, file name, value to put/update/append

    }
}

