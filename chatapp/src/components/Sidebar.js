import React, { useState } from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import Conversations from './Conversation';
import Contacs from './Contacts';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

export default function Sidebar({ id }) {

const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
const [modalOpen, settModalOpen] = useState(false);
const conversationstationOpen = activeKey === CONVERSATIONS_KEY;

function closeModal() {
  settModalOpen(false)
}

  return (
    <div style= {{ width: '250px'}} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" classaname="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacs />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your Id: <spam className="text-muted">{id}</spam>
        </div>
        <Button onClick={() => settModalOpen(true)} className="rounded-0">
          New {conversationstationOpen ? 'conversation' : 'Contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationstationOpen ?
        <NewConversationModal closeModal={closeModal} /> :
        <NewContactModal closeModal={closeModal} />
      }
      </Modal>
    </div>
  )
}