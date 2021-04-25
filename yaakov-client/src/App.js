import { useState } from 'react';
import PhoneValidate from './components/phone-validate';
import TicketForm from './components/ticket-form';

function App() {

   const [tenantId, setTenantId] = useState(-1);

   const onValidatedPhone = (tenantid) => setTenantId(tenantid);
   return (
      <>
         <PhoneValidate onValidatedPhone={onValidatedPhone} />
         {tenantId !== -1 ? <TicketForm tenantId={tenantId} /> : <></>}
      </>
   );
}

export default App;
