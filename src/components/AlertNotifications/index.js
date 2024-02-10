// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="bg">
    <h1 className="heading"> Alert Notifications </h1>
    <Notification>
      <div className="a">
        <AiFillCheckCircle className="success-icon" />
        <div className="b">
          <h1 className="success-heading"> Success </h1>
          <p className="notification">
            You can access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="a">
        <RiErrorWarningFill className="error-icon" />
        <div>
          <h1 className="error-heading"> Error </h1>
          <p className="notification">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="a">
        <MdWarning className="warning-icon" />
        <div className="c">
          <h1 className="warning-heading"> Warning </h1>
          <p className="notification">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="a">
        <MdInfo className="info-icon" />
        <div className="d">
          <h1 className="info-heading"> Info </h1>
          <p className="notification">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
