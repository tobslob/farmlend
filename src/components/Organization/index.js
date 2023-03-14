import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardLayout from '../DashBoardLayout/DashboardLayout';
import OrganizationContent from '../Organization/OrganizationContent';
import CreateOrganization from './CreateOrganization';
import '../Products/index.scss';

const Organizations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    type: '',
  };
  const [show, setShow] = useState(false);
  const [initialOrganizationValues, setInitialOrganizationValues] = useState(initialValues);

  const handleClose = () => {
    setInitialOrganizationValues(initialValues);
    navigate({ state: '' });
    setShow(false);
  };

  useEffect(() => {
    if (location.state && ['createOrganization', 'editOrganization'].includes(location.state)) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location]);

  return (
    <DashboardLayout>
      <OrganizationContent setInitialOrganizationValues={setInitialOrganizationValues} />
      <CreateOrganization
        isOpen={show}
        close={handleClose}
        initialValues={initialOrganizationValues}
      />
    </DashboardLayout>
  );
};

export default Organizations;
