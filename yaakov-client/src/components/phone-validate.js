
function PhoneValidate(props) {
   let userPhoneNumber = '';

   const onPhoneInputChange = e => {
      userPhoneNumber = e.target.value;
   }

   const validatePhoneNumber = () => {
      const qs = new URLSearchParams({
         phone: userPhoneNumber
      });
      fetch('http://localhost:4567/tenant/search?' + qs)
         .then(res => {
            if (res.ok) {
               return res.text();
            } else throw new Error(res.statusText)
         })
         .then(res => {
            props.onValidatedPhone(res);
         })
         .catch(err => console.log(err))

   }

   return <div>
      <input onChange={onPhoneInputChange} />
      <button onClick={validatePhoneNumber}>Validate number</button>
   </div>
}

export default PhoneValidate;