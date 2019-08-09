AWS CloudFront Test



Test your distribution:


a. Open a text editor on your computer. Copy and paste the following HTML code:

"<html>
<head>My CloudFront Test</head>
<body>
<p>My text content goes here.</p>
<p><img src="http:// domain name/object name" alt="my test image">
</body>
</html>"


Replace domain name with the domain name that CloudFront assigned to your distbribution, such as d111111abcdef8.cloudfront.net.
Replace object name with the name of your image file in the Amazon S3 bucket (upload any image) - in our case, cloudfront-test-image.png.
Save the text in a file as mycloudfronttest.html.


Reference:
https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/
