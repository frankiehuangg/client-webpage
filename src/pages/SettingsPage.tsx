import { useState } from "react";
import { Button, Container, Col, Row, Form, Collapse, InputGroup } from "react-bootstrap";


const SettingsPage = () => {
  const [option, setOption] = useState("account-information");

  const SettingsButton = ({ name } : { name: string }) => {
    let formattedName = name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return (
      <Row>
        <Col>
          <Button
          bsPrefix=""
          variant=""
          onClick={() => setOption(name)}
          as={"div"}
          className="settings-button text-white"
          >
          { formattedName }
          </Button>
        </Col>
      </Row>
    );
  }

  return (
  <>
    <Container fluid className="h-screen">
      <Row className="h-screen">
        <Col xs={12} md={4} className="p-0 left-settings-container">
          <h4 className="left-settings-container-title">Settings</h4>
          <SettingsButton name="account-information" />
          <SettingsButton name="change-password" />
          <SettingsButton name="notifications" />
          <SettingsButton name="delete-account" />
        </Col>
        <Col xs={12} md={8} className="p-0">
          {
            (option === "account-information") &&
            <Collapse in={(option === "account-information")} dimension="width">
              <>
              <h4 className="right-settings-title">Account Information</h4>
              <Form>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column>Profile Picture</Form.Label>
                    {/* <Form.Control id="profile-picture" type="file" /> */}
                </InputGroup>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column sm={3}>Email</Form.Label>
                  <Col sm={9}>
                    <Form.Control type="email" placeholder="email" />
                  </Col>
                </InputGroup>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column sm={3}>Username</Form.Label>
                  <Col sm={9}>
                    <Form.Control type="text" placeholder="username" />
                  </Col>
                </InputGroup>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column sm={3}>Display Name</Form.Label>
                  <Col sm={9}>
                    <Form.Control type="text" placeholder="display name" />
                  </Col>
                </InputGroup>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column sm={3}>Description</Form.Label>
                  <Col sm={9}>
                    <Form.Control type="text" placeholder="description" />
                  </Col>
                </InputGroup>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column sm={3}>Birthday</Form.Label>
                  <Col sm={3}>
                    <Form.Control type="text" placeholder="day" />
                  </Col>
                  <Col sm={3}>
                    <Form.Control type="text" placeholder="month" />
                  </Col>
                  <Col sm={3}>
                    <Form.Control type="text" placeholder="year" />
                  </Col>
                </InputGroup>
                
              </Form>
              <Form>
                <Form.Group as={Row} className="right-settings-content">
                  <Col className="d-flex justify-content-center">
                    <Button type="submit">Save Changes</Button>
                  </Col>
                </Form.Group>
              </Form>
              </>
            </Collapse>
          }
          {
            (option === "change-password") &&
            <Collapse in={(option === "change-password")} dimension="width">
              <>
              <h4 className="right-settings-title">Change Password</h4>
              <Form>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column sm={3}>Password</Form.Label>
                  <Col sm={9}>
                    <Form.Control type="password" />
                  </Col>
                </InputGroup>
                <InputGroup as={Row} className="right-settings-content">
                  <Form.Label column sm={3}>Repeat Password</Form.Label>
                  <Col sm={9}>
                    <Form.Control type="password" />
                  </Col>
                </InputGroup>
              </Form>
              <Form>
                <Form.Group as={Row} className="right-settings-content">
                  <Col className="d-flex justify-content-center">
                    <Button type="submit">Change Password</Button>
                  </Col>
                </Form.Group>
              </Form>
              </>
            </Collapse>
          }
          {
            (option === "notifications") &&
            <Collapse in={(option === "notifications")} dimension="width">
            <>
            <h4 className="right-settings-title">Notifications</h4>
            <Form>
              <InputGroup as={Row} className="right-settings-content">
                <Form.Label column sm={9}>Show notifications on like</Form.Label>
                <Col sm={3}>
                  <Form.Check type="switch" className="d-flex justify-content-center align-items-center" />
                </Col>
              </InputGroup>
              <InputGroup as={Row} className="right-settings-content">
                <Form.Label column sm={9}>Show notifications on follow</Form.Label>
                <Col sm={3}>
                  <Form.Check type="switch" className="d-flex justify-content-center align-items-center" />
                </Col>
              </InputGroup>
            </Form>
            </>
            </Collapse>
          }
          {
            (option === "delete-account") &&
            <Collapse in={(option === "delete-account")} dimension="width">
            <>
            <h4 className="right-settings-title">Delete Account</h4>
            <h5 style={{margin: "15px"}}>Are you sure you want to delete your account?</h5>
            <Form>
              <Form.Group as={Row} className="right-settings-content">
                <Col className="d-flex justify-content-center">
                  <Button type="submit" variant="danger">Delete Account</Button>
                </Col>
              </Form.Group>
            </Form>
            </>
            </Collapse>
          }
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default SettingsPage;