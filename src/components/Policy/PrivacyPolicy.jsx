// src/PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="mb-4">
        This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. This is important; we hope you will take the time to read it carefully.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Access</h2>
      <p className="mb-4">
        User can only access the app after login. Naunidh app is a subscription-based app. You always need an active subscription to use this app.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Information Collection and Use</h2>
      <p className="mb-4">
        For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Name, Email, Phone, Addresses, Gender, Birthdate, Anniversary Date, Location, Profile Picture. The information that we request will be retained by us and used as described in this privacy policy.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Permissions Needed</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>CAMERA - (For video Meet)</li>
        <li>Device Audio - (For video Meet)</li>
        <li>Contacts - (READ_CONTACTS, WRITE_CONTACTS)</li>
        <li>Location - (ACCESS_COARSE_LOCATION)</li>
        <li>Device Permissions - (INTERNET, ACCESS_NETWORK_STATE, RECEIVE_BOOT_COMPLETED, VIBRATE)</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
      <p className="mb-4">
        The app does use third-party services that may collect information used to identify you. Links to privacy policies of third-party service providers used by the app:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li><a href="https://policies.google.com/privacy" className="text-blue-500" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
        <li><a href="https://firebase.google.com/support/privacy" className="text-blue-500" target="_blank" rel="noopener noreferrer">Google Analytics for Firebase</a></li>
        <li><a href="https://www.facebook.com/about/privacy" className="text-blue-500" target="_blank" rel="noopener noreferrer">Facebook</a></li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Log Data</h2>
      <p className="mb-4">
        We want to inform you that whenever you use our Service, in case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
      <p className="mb-4">
        Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
        This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Service Providers</h2>
      <p className="mb-4">
        We may employ third-party companies and individuals due to the following reasons:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>To facilitate our Service;</li>
        <li>To provide the Service on our behalf;</li>
        <li>To perform Service-related services; or</li>
        <li>To assist us in analyzing how our Service is used.</li>
      </ul>
      <p className="mb-4">
        We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Security</h2>
      <p className="mb-4">
        We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Links to Other Sites</h2>
      <p className="mb-4">
        This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Children’s Privacy</h2>
      <p className="mb-4">
        These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Payments</h2>
      <p className="mb-4">
        We may provide paid products and/or services within the Service. In that case, we use third-party services for payment processing (e.g. payment processors).
        We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>
      <p className="mb-4">
        This policy is effective as of 2020-11-04
      </p>
      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p>
        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:Naunidhglobal@gmail.com" className="text-blue-500">Naunidhglobal@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
