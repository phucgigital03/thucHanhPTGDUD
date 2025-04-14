import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function truncateText(text, maxLength = 40) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
    }
    return text;
}

function CallAPI() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const handleGetPosts = ()=>{
        try {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const result = data.slice(0,10);
                setPosts(result)
            })
        } catch (error) {
            console.log("Error calling post api:",error)
        }
    }

    const handleGetPostsAxios = async () =>{
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
            if(data){
                const result = data.slice(0,10);
                setPosts(result)
            }
        } catch (error) {
            console.log("Error calling post api:",error)
        }
    }
    // handleGetPosts()
    handleGetPostsAxios()
  }, []);

  return (
    <div className="app-posts">
      <h2 className="app-title">Some Posts</h2>
      <div className="post-list">
        <Container>
          <Row sm={12} md={4} lg={4} xl={4} className="g-4">
            {posts.map((post) => (
              <Col key={post.id}>
                <Card style={{ width: "18rem" }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                    <Card.Title>{truncateText(post.title,20)}</Card.Title>
                    <Card.Text>
                      {truncateText(post.body)}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CallAPI;
