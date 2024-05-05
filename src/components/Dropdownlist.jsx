import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Dropdownlist() {
  return (
    <DropdownButton id="dropdown-basic-button" title="+234">
      <Dropdown.Item href="#/action-1">+91</Dropdown.Item>
      <Dropdown.Item href="#/action-2">+233</Dropdown.Item>
      <Dropdown.Item href="#/action-3">+44</Dropdown.Item>
    </DropdownButton>
  );
}

export default Dropdownlist;