# Machine Learning Model to Detect Anomalies

## Python, Java
![Diagram](images/blogs/awsInternshipBlog/cloudwatchExample.jpg)
_[Source](https://aws.amazon.com/blogs/apn/simplify-workload-monitoring-using-amazon-cloudwatch-anomaly-detection/) AWS Cloudwatch Anomaly Detection_ <br><br>

My 2nd internship as part of Immersive Software Engineering was with [AWS](https://www.aws.amazon.com) where I worked on the CloudWatch Anomaly Detection team.

I had the opportunity to dive deep into anomaly detection and the maths behind it as part of my internship at AWS. It turned out to be one of the most eye-opening and challenging technical experiences I’ve had so far - in the best way possible.<br><br>

**My Machine Learning Project**

I joined a team focused on anomaly detection, where the main goal was to catch unusual aberrations in system metric data - essentially alarming when the metric goes outside a range of expected values that represent normal metric behavior.

It sounds straightforward at first; a simple static threshold or standard deviation seems logical, but making a system that can tell a real anomaly from noise (without constant alarming or missing real anomalies) takes a lot more finesse than I expected.
Without going into too much detail, my project involved prototyping an unsupervised ensemble method and testing how robust it was on a variety of metric data types and timeframes. This involved a certain degree of fine-tuning parameters to reduce false alarms, improving model evaluation, and identifying edge cases.<br><br>

![Diagram](images/blogs/awsInternshipBlog/awsWebsiteExample.png)
_[Source](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html) Outlier vs Anomaly_ <br><br>



I worked closely with the data science team, and one of my biggest takeaways was how much of a difference a good validation strategy makes. It's easy to overfit a model, so testing on simulated or messy, unpredictable real-world data tended to negatively impact the f1 scores I received.

One of the cooler outcomes of my work was working the model into a reusable internal package that could be plugged into a simulation framework. It can be run using either live data or metrics retrieved from a S3 bucket.<br><br>

**Reflections**

Overall, this internship taught me the benefits of writing modular and extensible code, the benefits of comprehensive documentation and the drudgery of writing it!

Looking back, I’m thankful for the great team, manager and environment in CloudWatch, and especially for how much I learned. Not just about models and data, but about collaboration, clarity, and building things that last.
