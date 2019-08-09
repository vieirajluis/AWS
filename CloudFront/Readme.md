Deliver Content Faster
with Amazon CloudFront


Test your distribution:


a. Open a text editor on your computer. Copy and paste the following HTML code:


<p>&lt;html&gt;</p>
<p>&lt;head&gt;My CloudFront Test&lt;/head&gt;</p>
<p>&lt;body&gt;</p>
<p>&lt;p&gt;My text content goes here.&lt;/p&gt;</p>
<p>&lt;p&gt;&lt;img src=&quot;http://domain name/object name&quot; alt=&quot;my test image&quot;&gt;</p>
<p>&lt;/body&gt;</p>
<p>&lt;/html&gt;</p>


Replace domain name with the domain name that CloudFront assigned to your distbribution, such as d111111abcdef8.cloudfront.net.
Replace object name with the name of your image file in the Amazon S3 bucket (upload any image) - in this case, cloudfront-test-image.png.
Save the text in a file as mycloudfronttest.html.


Reference:
https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/
