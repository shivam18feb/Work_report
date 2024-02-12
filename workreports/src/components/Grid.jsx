import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "./grid.css"; // Assuming you have a CSS file for calendar styling
import MyForm from "./Form";

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const daysInMonth = 30; // Assuming each month has 30 days
  const months = 12; // Total number of months

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
  };

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>CIET NCERT</h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h1>Work Report</h1>
        </Col>
      </Row>

      {Array.from({ length: months }, (_, monthIndex) => (
        <div key={monthIndex}>
          <Row className="month-header">
            <Col className="text-center">
              <h2>Month {monthIndex + 1}</h2>
            </Col>
          </Row>
          <Row className="grid-container">
            {Array.from({ length: daysInMonth }, (_, dayIndex) => {
              const dayNumber = monthIndex * daysInMonth + dayIndex + 1;
              return (
                <Col
                  key={dayIndex}
                  xs
                  className={`grid-item ${dayNumber === 1 ? "month-start" : ""}`}
                  onClick={() => handleDayClick(dayNumber)}
                >
                  <div>
                    Day
                    <br />
                    {dayNumber}
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      ))}

      <Modal show={selectedDay !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Day {selectedDay}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Calendar;
