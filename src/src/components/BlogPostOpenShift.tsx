import { Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPostOpenShift = () => {
  return (
    <div className="blog-post-page">
      <div className="blog-detail">
        <Link to="/blog" className="back-link">← Back to Blog</Link>
        
        <div className="blog-detail-header">
          <span className="blog-detail-category">OpenShift</span>
          <h1>Getting Started with OpenShift: My Journey into Container Orchestration</h1>
          <div className="blog-detail-meta">
            <span>📅 Oktober 2025</span>
            <span>⏱️ 6 min read</span>
          </div>
        </div>
        
        <div className="blog-content">
          <p>
            I had known about OpenShift for some time, but initially had no opportunity to work with it actively. 
            It was only in my second year of training that I joined a department at SIX that used OpenShift. 
            There I was able to gain my first experience—mainly with deployments. Even though I was still unable to configure much myself, 
            it was a small success to get my first application live.
          </p>

          <h2>What exactly is OpenShift?</h2>
          <p>
            OpenShift is a container platform from Red Hat based on Kubernetes. 
            It allows you to package applications in containers and run them consistently in different environments 
            – whether development, testing, or production. 
            With OpenShift, you can automate deployments, connect services, and monitor the operation of your applications.
          </p>

          <blockquote>
            Containers have fundamentally changed the way we develop and deploy software. 
            OpenShift makes it easier to efficiently use and manage this technology.
          </blockquote>

          <h2>From deployment to custom configuration</h2>
          <p>
            In my third year of training, I was allowed to configure OpenShift from scratch in another department. 
            I wrote deployment configurations, planned services, and structured deployments. 
            Finally, I was able to control the platform myself and understand how all the components work together.
          </p>
          
          <p>
            Here is a general example of how a deployment in OpenShift could be structured:
          </p>
          
          <pre><code>{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: example-app
  template:
    metadata:
      labels:
        app: example-app
    spec:
      containers:
      - name: example-container
        image: example-image:latest
        ports:
        - containerPort: 8080`}</code></pre>
          
          <p>
            This example shows the basic structure of a deployment: number of instances (replicas), container image, ports, and labels. 
            This gives you an idea of how deployments are configured without sharing internal files.
          </p>

          <h2>My Learnings</h2>
          <ul>
            <li>Initial deployments provide small successes, even if you can't configure much yourself yet.</li>
            <li>YAML files and deployment configurations are at the heart of OpenShift.</li>
            <li>Container orchestration ensures consistent deployments across different environments.</li>
            <li>Pods, services, and routes are the central building blocks of OpenShift.</li>
            <li>With the right configuration, applications can be deployed and scaled efficiently.</li>
          </ul>

          <h2>Why OpenShift is exciting for me</h2>
          <p>
            OpenShift showed me how modern cloud-native development works. 
            The platform combines automation, scalability, and structure—from small deployments in the second year of training 
            to complete configuration in the third year. 
            While with classic VMs you often have to make sure that each developer uses their own ports or environments, 
            OpenShift ensures that each container runs in isolation and that its own resources, networks, and ports are managed automatically. 
            This makes deployments much easier and more secure.
          </p>

          <h2>Conclusion</h2>
          <p>
            My journey with OpenShift has been step by step: from the first deployment to independent management 
            and configuration of the platform. This experience has greatly expanded my technical skills 
            and helped me better understand the world of cloud-native technologies.
          </p>
        </div>

        <div className="author-section">
          <h3>author</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Lorena Jil Vennemann<br />
            Thank you for reading!
          </p>
        </div>

        <div className="related-posts">
          <h3>Further articles</h3>
          <div className="related-grid">
            <Link to="/blog/dev-event" className="related-card">
              <h4>DEV Confederation 2025</h4>
              <p>My first DEV Event!</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostOpenShift;
