import React, { useState, useEffect, Children } from 'react'
import dnmc from 'next/dynamic'
import styled, { css } from 'styled-components'
import { ComponentContainer, Container, InnerContainer, OuterContainer, SectionTitle, Title } from '@/components/Bootstrap/Common';
import Head from 'next/head'
import Link from 'next/link';

const Header = dnmc(() => import('@/components/StrapiComponents/PwaComponents/Header'));

const PwaContentContainer = styled.div`
`

const Terms = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
  navigationData,
}: any) => {

  return (
    <>
      <PwaContentContainer>
      <Header title={'Terms'} headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        <OuterContainer>
          <Container>
            <InnerContainer>
              <br />
              <ComponentContainer style={{ backgroundColor: 'white' }}>

                <Head>
                  <meta charSet="utf-8" />
                  <title>Delegate Management System - Terms of Website Use</title>
                  <link type="image/x-icon" href="/images/icofiles/lg-favicon-32x32.png" rel="shortcut icon" />
                  <style>
                    {`
                    html, body {
                      font - size: 85%;
                    font-family: Arial, Helvetica, sans-serif, Verdana, Tahoma;
        }

                    * {
                      margin: 0;
                    padding: 0;
                    border: 0;
        }

                    .a4 {
                      color: #232323;
                    float: left;
                    /*width: 794px;
                    height: 1110px;*/
                    width: 100%;
                    max-width: 960px;
        }

                    .a4padding {
                      padding: 20px;
        }

                    h2.v2 {
                      font - size: 1.6em;
                    color: #232323;
                    font-weight: normal;
                    padding: 15px 0 0 0;
        }

                    p {
                      padding: 5px 0 5px 0;
        }

                    .hrgrey {
                      float: left;
                    background: url(/images/dotline.gif) repeat-x scroll center;
                    height: 1px;
                    width: 100%;
                    margin-top: 10px;
        }

                    .hrgrey hr {
                      display: none;
            }

                    .termsbacktotop {
                      background: url(/images/btt-small-grey.gif) no-repeat 0 8px;
                    padding: 3px 0 6px 8px;
        }


                    ul.bull1 {
                      margin: 15px 0 10px 0;
                    padding: 0 0 10px 10px;
                    list-style: none;
        }

                    .bull1 li {
                      background: url(/images/dynbull.gif) no-repeat 0 5px;
                    margin: 0 0 0 30px;
                    padding: 0 0 0 10px;
                    list-style: none;
        }

                    ul.bull3 {
                      margin: 0px 0 10px 0;
                    padding: 0 0 10px 10px;
                    list-style: none;
        }

                    .bull3 li {
                      background: url(/images/dynbull2.gif) no-repeat 0 7px;
                    margin: 0 0 0 40px;
                    padding: 0 0 0 10px;
                    list-style: none;
        }


                    ul.blank {
                      margin: 15px 0 10px 0;
                    padding: 0 0 10px 10px;
                    list-style: none;
        }

                    .blank li {
                      margin: 0 0 0 30px;
                    padding: 0 0 0 10px;
                    list-style: none;
        }


                    a:link, a:active, a:visited {
                      color: #000000;
                    text-decoration: underline;
        }

                    a:hover {
                      color: #000000;
                    text-decoration: underline;
        }


                    #tabs3 {
                      float: left;
                    font-size: 100%;
                    width: 100%;
                    line-height: normal;
                    border-bottom: 1px solid #5c3896;
        }

                    #tabs3 ul {
                      list - style: none;
            }

                    #tabs3 li {
                      float: left;
                    margin: 0 4px 0 0;
                    color: #5c3896;
            }

                    #tabs3 a {
                      display: block;
                    color: #5c3896;
                    padding: 5px 10px 5px 8px;
                    text-decoration: none;
            }

                    #tabs3 a:hover {
                      background: #5c3896;
                    color: white;
                }

                    #tabs3 #current {
                      background: #5c3896;
                    color: white;
            }

                    #tabs3 #current a {
                      color: white;
                }

                    .small {
                      font - size: 95%;
        }

                    .lgrey2 {
                      color: #7b7b7b;
        }

                    h2, h3 {
                      margin - top: 1em;
        }

                    table, th, td {
                      text - align: left;
                    border: 1px solid black;
                    border-collapse: collapse;
                    padding: 2px 10px;
        }

                    .empty-cell {
                      color: white;
        }
                      `}
                  </style>
                </Head>

                <div className="a4">
                  <div className="a4padding">

                    <div id="tabs3">
                      <ul>
                        <li id="current"><Link href="#terms">Terms of Website Use</Link></li>
                        <li><Link href="#privacypolicy">Privacy Policy</Link></li>
                        <li><Link href="#gglrules">Greengage Rules</Link></li>
                        <li><Link href="#acceptableusepolicy">Acceptable Use Policy</Link></li>
                        <li><Link href="#termsandconditionsofsupply">Terms and Conditions of Supply</Link></li>
                        <li><Link href="#cookiepolicy">Cookie Policy</Link></li>
                      </ul>
                    </div>

                    <section id="terms" className="page">
                      <h1>Terms of Website Use</h1>

                      <p>This page (together with the documents referred to on it) tells you the terms of use on which you may make use of our website https://registration.livegroup.co.uk (our site), whether as a guest or a registered user. Please read these terms of use carefully before you start to use the site. By using our site, you indicate that you accept these terms of use and that you agree to abide by them. If you do not agree to these terms of use, please refrain from using our site.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Information about us</h2>
                      <p>https://registration.livegroup.co.uk is a site operated by The Live Group (“we”).  We are registered in England and Wales under company number 01201913.  Our main trading address is Great Suffolk Yard, 131 Great Suffolk Street, London, SE1 1PP.  Our VAT number is 834 8687 80.</p>

                      <p>We are a limited company.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Accessing our site</h2>
                      <p>Access to our site is permitted on a temporary basis, and we reserve the right to withdraw or amend the service we provide on our site without notice (see below). We will not be liable if for any reason our site is unavailable at any time or for any period.</p>

                      <p>From time to time, we may restrict access to some parts of our site, or our entire site, to users who have registered with us.</p>

                      <p>If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any third party. We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our opinion you have failed to comply with any of the provisions of these terms of use.</p>

                      <p>When using our site, you must comply with the provisions of our <Link href="#acceptableusepolicy">acceptable use policy</Link>.</p>

                      <p>You are responsible for making all arrangements necessary for you to have access to our site.  You are also responsible for ensuring that all persons who access our site through your internet connection are aware of these terms, and that they comply with them</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Intellectual property rights</h2>
                      <p>We are the owner or the licensee of all intellectual property rights in our site, and in the material published on it.  Those works are protected by copyright laws and treaties around the world.  All such rights are reserved.</p>

                      <p>You may print off one copy, and may download extracts, of any page(s) from our site for your personal reference and you may draw the attention of others within your organisation to material posted on our site.</p>

                      <p>You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.</p>

                      <p>Our status (and that of any identified contributors) as the authors of material on our site must always be acknowledged.</p>

                      <p>You must not use any part of the materials on our site for commercial purposes without obtaining a licence to do so from us or our licensors.</p>

                      <p>If you print off, copy or download any part of our site in breach of these terms of use, your right to use our site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">Reliance on information posted</h2>

                      <p>Commentary and other materials posted on our site are not intended to amount to advice on which reliance should be placed.  We therefore disclaim all liability and responsibility arising from any reliance placed on such materials by any visitor to our site, or by anyone who may be informed of any of its contents.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">Our site changes regularly</h2>

                      <p>We aim to update our site regularly, and may change the content at any time. If the need arises, we may suspend access to our site, or close it indefinitely. Any of the material on our site may be out of date at any given time, and we are under no obligation to update such material.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">Our liability</h2>
                      <p>The material displayed on our site is provided without any guarantees, conditions or warranties as to its accuracy. To the extent permitted by law, we, other members of our group of companies and third parties connected to us hereby expressly exclude:</p>

                      <ul className="bull1">
                        <li>All conditions, warranties and other terms which might otherwise be implied by statute, common law or the law of equity.</li>
                        <li>Any liability for any direct, indirect or consequential loss or damage incurred by any user in connection with our site or in connection with the use, inability to use, or results of the use of our site, any websites linked to it and any materials posted on it, including, without limitation any liability for:</li>
                      </ul>

                      <ul className="bull3">
                        <li>loss of income or revenue;</li>
                        <li>loss of business;</li>
                        <li>loss of profits or contracts;</li>
                        <li>loss of anticipated savings;</li>
                        <li>loss of data;</li>
                        <li>loss of goodwill;</li>
                        <li>wasted management or office time;</li>
                        <li>and for any other loss or damage of any kind, however arising and whether caused by tort (including negligence), breach of contract or otherwise, even if foreseeable.</li>
                      </ul>


                      <p>This does not affect our liability for death or personal injury arising from our negligence, nor our liability for fraudulent misrepresentation or misrepresentation as to a fundamental matter, nor any other liability which cannot be excluded or limited under applicable law.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Information about you and your visits to our site</h2>

                      <p>We process information about you in accordance with our <Link href="#privacypolicy">privacy policy</Link>.  By using our site, you consent to such processing and you warrant that all data provided by you is accurate.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Transactions concluded through our site</h2>
                      <p>Contracts for the supply of services formed through our site or as a result of visits made by you are governed by our <Link href="#termsandconditionsofsupply">terms and conditions of supply</Link>.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Uploading material to our site</h2>
                      <p>Whenever you make use of a feature that allows you to upload material to our site, or to make contact with other users of our site, you must comply with the content standards set out in our <Link href="#acceptableusepolicy">acceptable use policy</Link>.  You warrant that any such contribution does comply with those standards, and you indemnify us for any breach of that warranty.</p>

                      <p>Any material you upload to our site will be considered non-confidential and non-proprietary, and we have the right to use, copy, distribute and disclose to third parties any such material for any purpose. We also have the right to disclose your identity to any third party who is claiming that any material posted or uploaded by you to our site constitutes a violation of their intellectual property rights, or of their right to privacy.</p>

                      <p>We will not be responsible, or liable to any third party, for the content or accuracy of any materials posted by you or any other user of our site.</p>

                      <p>We have the right to remove any material or posting you make on our site if, in our opinion, such material does not comply with the content standards set out in our <Link href="#acceptableusepolicy">acceptable use policy</Link> .</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Viruses, hacking and other offences</h2>

                      <p>You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site. You must not attack our site via a denial-of-service attack or a distributed denial-of service attack.</p>

                      <p>By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our site will cease immediately.</p>

                      <p>We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of our site or to your downloading of any material posted on it, or on any website linked to it.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">Linking to our site</h2>
                      <p>You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists.</p>

                      <p>You must not establish a link from any website that is not owned by you.</p>

                      <p>Our site must not be framed on any other site, nor may you create a link to any part of our site other than the home page. We reserve the right to withdraw linking permission without notice. The website from which you are linking must comply in all respects with the content standards set out in our <Link href="#acceptableusepolicy">acceptable use policy</Link>.</p>

                      <p>If you wish to make any use of material on our site other than that set out above, please address your request to <Link href="/cdn-cgi/l/email-protection#50232520203f2224103c39263537223f25207e333f7e253b"><span className="__cf_email__" data-cfemail="11626461617e6365517d78677476637e64613f727e3f647a">[email&#160;protected]</span></Link></p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">Links from our site</h2>
                      <p>Where our site contains links to other sites and resources provided by third parties, these links are provided for your information only.  We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>

                      <h2 className="v2">Jurisdiction and applicable law</h2>

                      <p>The English courts will have exclusive jurisdiction over any claim arising from, or related to, a visit to our site although we retain the right to bring proceedings against you for breach of these conditions in your country of residence or any other relevant country.</p>

                      <p>These terms of use and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">Trade marks</h2>
                      <p>GreenGageLive and Live Group are registered trade marks of The Live Group.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">Variations</h2>
                      <p>We may revise these terms of use at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we made, as they are binding on you. Some of the provisions contained in these terms of use may also be superseded by provisions or notices published elsewhere on our site</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Your concerns</h2>

                      <p>If you have any concerns about material which appears on our site, please contact <Link href="/cdn-cgi/l/email-protection#63101613130c1117230f0a150604110c16134d000c4d1608"><span className="__cf_email__" data-cfemail="51222421213e2325113d38273436233e24217f323e7f243a">[email&#160;protected]</span></Link></p>

                      <p>Thank you for visiting our site.</p>
                      <div className='hrgrey'>
                        <hr />
                      </div>
                      <Link href="#" className="termsbacktotop">Back to top</Link>
                    </section>


                    <section id="privacypolicy" className="page">
                      <h1>Privacy Notice – Delegate Management System</h1>

                      <h2 className="v2">1. Introduction</h2>
                      <p>This Privacy Notice is intended to describe the practices which The Live Group follows in relation to the Delegate Management System (“DMS”) with respect to the privacy of all individuals whose personal data is processed and stored in the DMS.</p>

                      <h2 className="v2">2.	Who manages the DMS?</h2>
                      <p>The DMS is managed, maintained and licensed by Lewis Live Limited (The Live Group), Great Suffolk Yard, 131 Great Suffolk Street, London, SE1 1PP, United Kingdom.</p>
                      <p>The data which you provide through the DMS is shared with the licensee of the DMS – the Data Controller. If you are in doubt of who the data controller for your event is please contact The Live Group via e-mail <Link href="/cdn-cgi/l/email-protection#d0a3a5a0a0bfa2a490bcb9a6b5b7a2bfa5a0feb3bffea5bb"><span className="__cf_email__" data-cfemail="21525451514e5355614d48574446534e54510f424e0f544a">[email&#160;protected]</span></Link> and we will be able to confirm these details.</p>
                      <p>The DMS is hosted on servers that are located in the United Kingdom.</p>

                      <h2 className="v2">3.	Why do we need your information?</h2>
                      <p>The purpose of the DMS is to facilitate the organization and management of events, including arranging accommodation and meals for attendees. Personal Data is collected and processed in the DMS in order to facilitate the organization of the meetings, conferences or events. This may include, e.g. obtaining the dietary and other additional requirements of event attendees. Such Personal Data will be shared with relevant third parties who have involvement in the event (e.g. the owners of the venue or hotel where the event is being held).</p>

                      <p>Your personal data is shared with the Data Controller of a given event in order for them to update their records, or check on the status of your registration.</p>

                      <p>Processing is necessary for the purposes of the <Link href="#terms">terms and conditions</Link> of this system and legitimate interests pursued by the data controller for a given event or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject which require protection of personal data.</p>

                      <p>The provision of your personal data to The Live Group is optional, however, please be aware that if you do not provide us with all or part of your personal data, we may not be able to carry out the purposes for processing which are set out above.</p>

                      <h2 className="v2">4.	What type of personal data is processed in the DMS?</h2>
                      <p>The DMS processes the following categories of personal data (note the list below is non-exhaustive as the data request fields may be edited by The Live Group or the event’s Data Controller, depending on the nature of the event):</p>
                      <ul className="bull1">
                        <li>Contact Details</li>
                        <li>Name</li>
                        <li>Company and job information</li>
                        <li>Dietary restrictions</li>
                        <li>Special accessibility needs</li>
                        <li>Information about accommodation</li>
                        <li>User name and passwords</li>
                        <li>Web click data, cookies etc.</li>
                        <li>Requests for consent when filming and photography are taking place at an event</li>
                      </ul>

                      <p>Unless explicitly requested by the event’s Data Controller for the purposes of pre-registration, your personal data will always be voluntarily provided by you by completing the event registration form.</p>

                      <p>If you wish to register for the event without completing the registration form on the platform, you should contact the Data Controller for your event or, if unsure who to contact, contact The Live Group at <Link href="/cdn-cgi/l/email-protection#2655535656495452664a4f5043415449535608454908534d"><span className="__cf_email__" data-cfemail="43303633332c3137032f2a352624312c36336d202c6d3628">[email&#160;protected]</span></Link></p>

                      <p>You can delete your data at any time by emailing <Link href="/cdn-cgi/l/email-protection#7e1a1f0a1f0e0c110a1b1d0a1711103e1217081b190c110b0e501d11500b15"><span className="__cf_email__" data-cfemail="a5c1c4d1c4d5d7cad1c0c6d1cccacbe5c9ccd3c0c2d7cad0d58bc6ca8bd0ce">[email&#160;protected]</span></Link> with the subject header ‘REMOVE MY DATA’ from the email address associated with your account. Please note that if you delete your data before the event, we may not be able to permit you entry to the event.</p>

                      <h2 className="v2">5.	Sensitive Personal Data</h2>
                      <p>Sensitive (Special Category) personal data reveals your racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data, data concerning health or data concerning sex life or sexual orientation.</p>
                      <p>The following sensitive personal data is collected and processed in the DMS:</p>

                      <ul className="bull1">
                        <li>Information relating to an individual’s health (e.g. special accessibility needs and food allergies) may be processed in the DMS if it is relevant to an event that they are attending. The accessibility needs information is requested to help support individuals at events if needed.</li>
                        <li>Information relating to an individual’s dietary requirements may be considered sensitive personal information where it indicates religious beliefs.</li>
                      </ul>

                      <h2 className="v2">6.	Who can access your information?</h2>
                      <p>Your personal data may be accessed in the DMS by the following persons/teams:</p>
                      <ul className="bull1">
                        <li>System Administrators who are assigned to work on a particular event</li>
                        <li>Event Attendees (delegates); and</li>
                        <li>Third parties who are involved in the event, e.g. hotel staff/ venue managers.</li>
                      </ul>

                      <p>If you have given permission, your personal data in the DMS can be accessed by sponsors and exhibitors.</p>

                      <p>The access rights and locations of these persons/teams are as follows:</p>
                      <ul className="bull1">
                        <li>Client Administrators who are assigned to work on a particular event have read/write/delete access to all Personal Data.</li>
                        <li>Super Administrators (Live Group only). There is a team of 12 people based in the UK who have super administrator permissions. This means that they have full access to all data within the DMS and can grant access to DMS to authorized personnel.</li>
                        <li>Event Attendees. Users have read/write access to their personal profile only. Some of data is visible and editable, but not all.</li>
                      </ul>

                      <p>Your personal data will only be shared with Exhibitors or Sponsors if you opt in and give consent during registration. You can opt out of this at any point during the Event.</p>

                      <h2 className="v2">7.	Data retention</h2>
                      <p>The policies and/or procedures for the retention of personal data in the DMS are as follows:</p>
                      <ol>
                        <li>After a meeting or event is completed, information relating to the event attendees (delegates) themselves will be deleted from the system when it is no longer required.</li>
                        <li>Global System Owners will undertake a review of the system annually and delete the user registration record of any user who is inactive in the system within the last 18 months.</li>
                        <li>Following any requests from delegates, as detailed in section 4.</li>
                      </ol>

                      <p>After the end of the data retention period specified in the policies and/or procedures set out above, your personal data will be deleted.</p>

                      <h2 className="v2">8.	Security</h2>
                      <p>The Live Group is committed to making sure that your personal data is kept secure. In order to prevent unauthorised access or disclosure, The Live Group has put in place appropriate technical and organizational measures to safeguard and secure your personal data. All Live Group personnel and any third parties which The Live Group engages to process your personal data are obliged to respect the confidentiality of your data and comply with all the relevant data protection and privacy laws.</p>

                      <h2 className="v2">9.	Controlling your personal data</h2>
                      <p>The Live Group will never sell or lease your personal data to third parties.</p>
                      <p>We will only share your personal data with third parties when required to do so in order to deliver the required event experience (eg to ensure you get your dietary requirements) or when we are required by law to do so.</p>
                      <p>You are legally entitled to request details and a copy of the personal data which The Live Group holds about you.</p>
                      <p>If you would like to obtain confirmation as to whether or not your personal data is processed in the DMS or if you would like to access your personal data in the DMS, please contact us via <Link href="/cdn-cgi/l/email-protection#fe8d8b8e8e918c8abe9297889b998c918b8ed09d91d08b95"><span className="__cf_email__" data-cfemail="41323431312e3335012d28372426332e34316f222e6f342a">[email&#160;protected]</span></Link>.</p>

                      <h2 className="v2">10.	Rectification, erasure or restriction of processing</h2>
                      <p>The Live Group provides you with the ability to make sure your personal data is accurate and up to date. You can request rectification, erasure or restriction of processing and profiling of your personal data by sending an e-mail to <Link href="/cdn-cgi/l/email-protection#4b383e3b3b24393f0b27223d2e2c39243e3b652824653e20"><span className="__cf_email__" data-cfemail="c9babcb9b9a6bbbd89a5a0bfacaebba6bcb9e7aaa6e7bca2">[email&#160;protected]</span></Link>.</p>

                      <h2 className="v2">11.	Complaints</h2>
                      <p>If you are concerned about an alleged breach of privacy law or any other regulation by The Live Group, you can contact The Live Group’s Privacy Officer, Great Suffolk Yard, 131 Great Suffolk Street, London, SE1 1PP, United Kingdom or via email at <Link href="/cdn-cgi/l/email-protection#81e5e0f5e0f1f3eef5e4e2f5e8eeefc1ede8f7e4e6f3eef4f1afe2eeaff4ea"><span className="__cf_email__" data-cfemail="402421342130322f34252334292f2e002c29362527322f35306e232f6e352b">[email&#160;protected]</span></Link>. A Live Group representative will be made available to investigate your complaint and give you information about how it will be handled and resolved.</p>
                      <p>If you are not satisfied with the way in which The Live Group has resolved your complaint, you have the right to complain to the data protection authority in your country.</p>
                      <p><Link href="https://ec.europa.eu/justice/article-29/structure/data-protection-authorities/index_en.htm" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/justice/article-29/structure/data-protection-authorities/index_en.htm</Link></p>
                      <p>You may also refer the matter to a court of competent jurisdiction.</p>

                      <h2 className="v2">12.	Contact us</h2>
                      <p>If you have questions or you do not feel that your concerns have been addressed in this Privacy Notice, you can reach us via <Link href="/cdn-cgi/l/email-protection#c7a3a6b3a6b7b5a8b3a2a4b3aea8a987abaeb1a2a0b5a8b2b7e9a4a8e9b2ac"><span className="__cf_email__" data-cfemail="cbafaabfaabbb9a4bfaea8bfa2a4a58ba7a2bdaeacb9a4bebbe5a8a4e5bea0">[email&#160;protected]</span></Link>.</p>
                    </section>


                    <section id="gglrules" className="page">
                      <h1>Acceptance of Greengage Rules</h1>

                      <p>These rules (Rules) set out the terms for use of the Greengage Bulletin interactive services which includes business related (chat rooms, bulletin board, participating links) (the Greengage Service), which apply to all users.  Any submission of material by you to the Greengage Service means that you accept, and agree to abide by, all the terms and conditions of these Rules.</p>

                      <p>The Rules supplement our <Link href="#terms">terms of website</Link> use and our <Link href="#privacypolicy">privacy policy</Link>.</p>

                      <p>Greengage is a site operated by The Live Group. We are registered in England and Wales under company number 01201913. Our main trading address is Great Suffolk Yard, 131 Great Suffolk Street, London, SE1 1PP. Our VAT number is 834 8687 80.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Moderation</h2>

                      <p>The Greengage Service is fully moderated.  Every contribution submitted to the Greengage Service (Contribution) will be checked by us for compliance with our <Link href="#contentstandards">content standards</Link> (Content Standards) as soon as reasonably practicable after it is published.  We will try to publish as many Contributions as we can but we cannot guarantee that all Contributions will be published.  We also cannot guarantee how quickly Contributions will be posted on the Greengage Service as this will depend on other editorial commitments.</p>

                      <p>Although the Greengage Service is fully moderated, we are under no obligation to you or any other person to oversee, monitor or moderate the Greengage Service or any other service we provide on our site and we may stop moderating the Greengage Service at any time.  We reserve the right to remove, or to disable access to, any Contribution which we deem to be potentially defamatory of any person or which we deem unlawful or in violation of any third party rights. We expressly exclude our liability for any loss or damage arising from the use of the Greengage Service by any person in contravention of these Rules.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Use of the Greengage Service by minors</h2>

                      <p>The use of the Greengage Service by a minor is prohibited and only persons over 18 years may use the site.  We advise parents who permit their children to use the Greengage Service despite this prohibition that it is important that they communicate with their children about their safety online.  Minors who are using the Greengage Service should be made aware of the potential risks to them and of their obligation to comply with these Rules when using the Greengage Service.</p>

                      <p>We will do our best to assess any possible risks to minors from third parties when they use the Greengage Service, and we will decide in each case whether it is appropriate to use moderation of the relevant service (including what kind of moderation to use) in the light of those risks.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Submission of Contributions</h2>

                      <p>To add a Contribution to a discussion, please</p>

                      <ul className="bull1">
                        <li>Click on Forum, from the home page or using the header option along the top.</li>
                        <li>Enter your contribution and press ‘Post Reply’</li>
                      </ul>

                      <p>There is no limit to the length of a Contribution.</p>

                      <p>A new thread for discussion can only be added by the administrator.</p>

                      <p>Before making a Contribution you must register with the Greengage Service by completing the registration form.  Your name, your position, the name of your company and location will appear as part of your Contribution when published.</p>

                      <p>To enable us to publish comments from as many different people as possible, please refrain from posting multiple Contributions.  Multiple Contributions may discourage others who might otherwise wish to take part.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <div id="contentstandards"></div>
                      <h2 className="v2">Content standards</h2>

                      <p>These Content Standards apply to each part of a Contribution as well as to its whole.  The Content Standards must be complied with in spirit as well as to the letter.  The Live Group will determine, in its discretion, whether a Contribution breaches the Content Standards.</p>

                      <p>A Contribution must:</p>

                      <ul className="bull1">
                        <li>Be accurate (where it states facts).</li>
                        <li>Be genuinely held (where it states opinions).</li>
                        <li>Comply with the law applicable in England and Wales and in any country from which it is posted.</li>
                        <li>Be relevant.</li>
                      </ul>

                      <p>A Contribution must not:</p>

                      <ul className="bull1">
                        <li>Be defamatory of any person.</li>
                        <li>Be obscene, offensive, hateful or inflammatory.</li>
                        <li>Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.</li>
                        <li>Disclose the name, address, telephone, mobile or fax number, e-mail address or any other personal data in respect of any individual.</li>
                        <li>Infringe any copyright, database right or trade mark of any other person.</li>
                        <li>Breach any legal duty owed to a third party, such as a contractual duty or a duty of confidence.</li>
                        <li>Be in contempt of court.</li>
                        <li>Be likely to harass, upset, embarrass, alarm or annoy any other person.</li>
                        <li>Impersonate any person, or misrepresent your identity or affiliation with any person.</li>
                        <li>Give the impression that the Contribution emanates from The Live Group if this is not the case.</li>
                        <li>Advocate, promote, incite any third party to commit, or assist any unlawful or criminal act.</li>
                        <li>Contain a statement which you know or believe, or have reasonable grounds for believing, that members of the public to whom the statement is, or is to be, published are likely to understand as a direct or indirect encouragement or other inducement to the commission, preparation or instigation of acts of terrorism.</li>
                        <li>Contain any advertising or promote any services or web links to other sites.</li>
                      </ul>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Copyright</h2>

                      <p>By submitting a Contribution to the Greengage Service, you agree to grant The Live Group a non-exclusive licence to use that Contribution.  Although you will still own the copyright in your Contribution, The Live Group will have the right to freely use, edit, alter, reproduce, publish and/or distribute the material contained in your Contribution.  This licence will be free of charge, perpetual and capable of sub-licence.  The Live Group may exercise all copyright and publicity rights in the material contained in your Contribution in all jurisdictions, to their full extent and for the full period for which any such rights exist in that material.</p>

                      <p>Please also note that, in accordance with the <Link href="#contentstandards">Content Standards</Link>, you must ensure that your Contribution does not infringe any copyright, database right or trade mark of any other person.  By submitting your Contribution to the Greengage Service, you are warranting that you have the right to grant The Live Group the non-exclusive copyright licence described above.</p>

                      <p>If you are not in a position to grant such a licence to The Live Group please do not submit the Contribution to the Greengage Service.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Breach of these Rules</h2>

                      <p>When we consider that a breach of the <Link href="#contentstandards">Content Standards</Link> has occurred, we may at our discretion take such action as we deem appropriate.  Failure to comply with these Rules constitutes a material breach of the terms of use on which you are permitted to use the Greengage Service, and may result in our taking all or any of the following actions:</p>

                      <ul className="bull1">
                        <li>Immediate, temporary or permanent withdrawal of your right to use the Greengage Service.</li>
                        <li>Immediate, temporary or permanent removal of any Contribution already posted on the Greengage Service.</li>
                        <li>Issue of a warning to you.</li>
                        <li>Legal proceedings against you for reimbursement of all costs on an indemnity basis (including, but not limited to, reasonable administrative and legal costs) resulting from the breach.</li>
                        <li>Further legal action against you.</li>
                        <li>Disclosure of such information to law enforcement authorities as we reasonably feel is necessary or as required by law.</li>
                      </ul>

                      <p>We exclude our liability for all action we may take in response to breaches of these Rules.  The actions described above are not limited, and we may take any other action we reasonably deem appropriate.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Complaints</h2>

                      <p>If you wish to complain about any Contribution posted to the Greengage Service, please contact us at <Link href="/cdn-cgi/l/email-protection#25565055554a575165494c534042574a50550b464a0b504e"><span className="__cf_email__" data-cfemail="186b6d6868776a6c5874716e7d7f6a776d68367b77366d73">[email&#160;protected]</span></Link>.  We will then review the Contribution and decide whether it complies with our <Link href="#contentstandards">Content Standards</Link>.  We will deal with any Contribution which, in our opinion, violates our <Link href="#contentstandards">Content Standards</Link> as described above (see section &quot;Breach of these Rules&quot;).  We will inform you of the outcome of our review within a reasonable time of receiving your complaint.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Changes to these Rules</h2>

                      <p>We may revise these Rules at any time.  You are expected to check this page from time to time to take notice of any changes we make, as they are legally binding on you.</p>
                      <div className='hrgrey'>
                        <hr />
                      </div>
                      <Link href="#" className="termsbacktotop">Back to top</Link>
                    </section>


                    <section id="acceptableusepolicy" className="page">
                      <h1>Acceptable Use Policy</h1>

                      <p>This acceptable use policy sets out the terms between you and us under which you may access our website https://registration.livegroup.co.uk (our site). This acceptable use policy applies to all users of, and visitors to, our site.</p>

                      <p>Your use of our site means that you accept, and agree to abide by, all the policies in this acceptable use policy, which supplement our <Link href="#terms">terms of website use</Link>.</p>

                      <p>https://registration.livegroup.co.uk is a site operated by The Live Group (“we”).  We are registered in England and Wales under company number 01201913. Our main trading address is Great Suffolk Yard, 131 Great Suffolk Street, London, SE1 1PP.  Our VAT number is 834 8687 80.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">Prohibited uses</h2>

                      <p>You may use our site only for lawful purposes.  You may not use our site:</p>

                      <ul className="bull1">
                        <li>In any way that breaches any applicable local, national or international law or regulation.</li>
                        <li>In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect.</li>
                        <li>For the purpose of harming or attempting to harm minors in any way.</li>
                        <li>To send, knowingly receive, upload, download, use or re-use any material which does not comply with our <Link href="#contentstandards">content standards</Link>.</li>
                        <li>To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam).</li>
                        <li>To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.</li>
                      </ul>

                      <p>You also agree:</p>

                      <ul className="bull1">
                        <li>Not to reproduce, duplicate, copy or re-sell any part of our site in contravention of the provisions of our <Link href="#terms">terms of website use</Link>.</li>
                        <li>Not to access without authority, interfere with, damage or disrupt:</li>
                        <li>any part of our site;</li>
                        <li>any equipment or network on which our site is stored;</li>
                        <li>any software used in the provision of our site; or</li>
                        <li>any equipment or network or software owned or used by any third party.</li>
                      </ul>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">Interactive services</h2>

                      <p>We may from time to time provide interactive services on our site, including, without limitation:</p>

                      <ul className="bull1">
                        <li>Chat rooms.</li>
                        <li>Bulletin boards.</li>
                        <li>Greengage Live Registration and Information Distribution Service (interactive services).</li>
                      </ul>

                      <p>Where we do provide any interactive service, we will provide clear information to you about the kind of service offered, if it is moderated and what form of moderation is used (including whether it is human or technical).</p>

                      <p>We will do our best to assess any possible risks for users (and in particular, for children) from third parties when they use any interactive service provided on our site, and we will decide in each case whether it is appropriate to use moderation of the relevant service (including what kind of moderation to use) in the light of those risks. However, we are under no obligation to oversee, monitor or moderate any interactive service we provide on our site, and we expressly exclude our liability for any loss or damage arising from the use of any interactive service by a user in contravention of our content standards, whether the service is moderated or not.</p>

                      <p>The use of any of our interactive services by a minor is prohibited. We advise parents who permit their children to use an interactive service that it is important that they communicate with their children about their safety online, as moderation is not foolproof. Minors who are using any interactive service should be made aware of the potential risks to them.</p>

                      <p>Where we do moderate an interactive service, we will normally provide you with a means of contacting the moderator, should a concern or difficulty arise.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">Content standards</h2>

                      <p>These content standards apply to any and all material which you contribute to our site (contributions), and to any interactive services associated with it.</p>

                      <p>You must comply with the spirit of the following standards as well as the letter. The standards apply to each part of any contribution as well as to its whole.</p>


                      <p>Contributions must:</p>

                      <ul className="bull1">
                        <li>Be accurate (where they state facts).</li>
                        <li>Be genuinely held (where they state opinions).</li>
                        <li>Comply with applicable law in the UK and in any country from which they are posted.</li>
                      </ul>

                      <p>Contributions must not:</p>

                      <ul className="bull1">
                        <li>Contain any material which is defamatory of any person.</li>
                        <li>Contain any material which is obscene, offensive, hateful or inflammatory.</li>
                        <li>Promote sexually explicit material.</li>
                        <li>Promote violence.</li>
                        <li>Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.</li>
                        <li>Infringe any copyright, database right or trade mark of any other person.</li>
                        <li>Be likely to deceive any person.</li>
                        <li>Be made in breach of any legal duty owed to a third party, such as a contractual duty or a duty of confidence.</li>
                        <li>Promote any illegal activity.</li>
                        <li>Be threatening, abuse or invade another&apos;s privacy, or cause annoyance, inconvenience or needless anxiety.</li>
                        <li>Be likely to harass, upset, embarrass, alarm or annoy any other person.</li>
                        <li>Be used to impersonate any person, or to misrepresent your identity or affiliation with any person.</li>
                        <li>Give the impression that they emanate from us, if this is not the case.</li>
                        <li>Advocate, promote or assist any unlawful act such as (by way of example only) copyright infringement or computer misuse.</li>
                      </ul>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Suspension and termination</h2>

                      <p>We will determine, in our discretion, whether there has been a breach of this acceptable use policy through your use of our site.  When a breach of this policy has occurred, we may take such action as we deem appropriate.</p>

                      <p>Failure to comply with this acceptable use policy constitutes a material breach of the <Link href="#terms">terms of use</Link> upon which you are permitted to use our site, and may result in our taking all or any of the following actions:</p>
                      <ul className="bull1">
                        <li>Immediate, temporary or permanent withdrawal of your right to use our site.</li>
                        <li>Immediate, temporary or permanent removal of any posting or material uploaded by you to our site.</li>
                        <li>Issue of a warning to you.</li>
                        <li>Legal proceedings against you for reimbursement of all costs on an indemnity basis (including, but not limited to, reasonable administrative and legal costs) resulting from the breach.</li>
                        <li>Further legal action against you.</li>
                        <li>Disclosure of such information to law enforcement authorities as we reasonably feel is necessary.</li>
                      </ul>

                      <p>We exclude liability for actions taken in response to breaches of this acceptable use policy.  The responses described in this policy are not limited, and we may take any other action we reasonably deem appropriate.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">Changes to the acceptable use policy</h2>

                      <p>We may revise this acceptable use policy at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we make, as they are legally binding on you. Some of the provisions contained in this acceptable use policy may also be superseded by provisions or notices published elsewhere on our site.</p>
                      <div className='hrgrey'>
                        <hr />
                      </div>
                      <Link href="#" className="termsbacktotop">Back to top</Link>
                    </section>


                    <section id="termsandconditionsofsupply" className="page">
                      <h1>Website Terms and Conditions of Supply</h1>

                      <p>This page (together with the documents referred to on it) tells you the terms and conditions on which we supply any of the Services (Services) listed on our website https://registration.livegroup.co.uk (our site) to you.  Please read these terms and conditions carefully before ordering any Services from our site.  You should understand that by ordering any of our Services, you agree to be bound by these terms and conditions.</p>

                      <p>You should print a copy of these terms and conditions for future reference.</p>

                      <p>Please click on the button marked &apos;I Accept&apos; at the end of these terms and conditions if you accept them.  Please understand that if you refuse to accept these terms and conditions, you will not be able to order any Services from our site.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">1. Information about us</h2>
                      <p><b>1.1</b> https://registration.livegroup.co.uk is a site operated by The Live Group (we).  We are registered in England and Wales under company number 01201913.  Our main trading address is Great Suffolk Yard, 131 Great Suffolk Street, London, SE1 1PP.  Our VAT number is 834 8687 80</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">2. Service availability</h2>
                      <p>Our site is only intended for use by people resident in the United Kingdom and Europe (‘Serviced Countries’). We do not accept orders from individuals outside those countries.  Some restrictions are placed on the extent to which we accept orders from specific countries. These restrictions can be found by contacting us at <Link href="/cdn-cgi/l/email-protection#73000603031c0107331f1a051614011c06035d101c5d0618"><span className="__cf_email__" data-cfemail="91e2e4e1e1fee3e5d1fdf8e7f4f6e3fee4e1bff2febfe4fa">[email&#160;protected]</span></Link>.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">3. Your status</h2>
                      <p>By placing an order through our site, you warrant that:</p>

                      <ul className="blank">
                        <li>(a) You are legally capable of entering into binding contracts; and;</li>

                        <li>(b) You are at least 18 years old;</li>

                        <li>(c) You are resident in one of the Serviced Countries; and</li>

                        <li>(d) You are accessing our site from that country.</li>
                      </ul>


                      <h2 className="v2">4. How the contract is formed between you and us</h2>

                      <p><b>4.1</b> After placing an order, you will receive an e-mail from us acknowledging that we have received your order.  Please note that this does not mean that your order has been accepted.  Your order constitutes an offer to us to buy a Service.  All orders are subject to acceptance by us, and we will confirm such acceptance to you by sending you an e-mail that confirms that the Service has been ordered (the Order Confirmation).  The contract between us (Contract) will only be formed when we send you the Order Confirmation.</p>

                      <p><b>4.2</b> The Contract will relate only to those Services whose order we have confirmed in the Order Confirmation.  We will not be obliged to supply any other Services which may have been part of your order until the order of such Services has been confirmed in a separate Order Confirmation.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">5. Our status</h2>

                      <p><b>5.1</b> Please note that in some cases, we accept orders as agents on behalf of third party sellers.  The resulting legal contract is between you and that third party seller, and is subject to the terms and conditions of that third party seller, which they will advise you of directly.  You should carefully review their terms and conditions applying to the transaction.</p>

                      <p><b>5.2</b> We may also provide links on our site to the websites of other companies, whether affiliated with us or not.  We cannot give any undertaking, that Services you purchase from third party sellers through our site, or from companies to whose website we have provided a link on our site, will be of satisfactory quality, and any such warranties are DISCLAIMED by us absolutely.  This DISCLAIMER does not affect your statutory rights against the third party seller.  We will notify you when a third party is involved in a transaction, and we may disclose your customer information related to that transaction to the third party seller.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">6. Consumer rights</h2>
                      <p><b>6.1</b>  If you are contracting as a consumer, you may cancel a Contract at any time within seven working days, beginning on the day after you ordered the Services.  In this case, you will receive a full refund of the price paid for the Services in accordance with our refunds policy (set out in clause 10 below).</p>

                      <p><b>6.2</b> To cancel a Contract, you must inform us in writing.</p>

                      <p><b>6.3</b> Details of this statutory right, and an explanation of how to exercise it, are provided in the Order Confirmation.  This provision does not affect your statutory rights.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">7. Availability</h2>

                      <p>Your order will be fulfilled on the date set out in the Order Confirmation or, if no date is specified, then within a reasonable time of the date of the Order Confirmation, unless there are exceptional circumstances.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">8. Price and payment</h2>
                      <p><b>8.1</b> The price of any Services will be as quoted on our site from time to time, except in cases of obvious error.</p>

                      <p><b>8.2</b> These prices include VAT.</p>

                      <p><b>8.3</b> Prices are liable to change at any time, but changes will not affect orders in respect of which we have already sent you a Order Confirmation.</p>

                      <p><b>8.4</b> Our site contains a large number of Services and it is always possible that, despite our best efforts, some of the Services listed on our site may be incorrectly priced.  We will normally verify prices as part of our Order procedures so that, where a Service&apos;s correct price is less than our stated price, we will charge the lower amount when you order the Service.  If a Service&apos;s correct price is higher than the price stated on our site, we will normally, at our discretion, either contact you for instructions before providing the Service, or reject your order and notify you of such rejection.</p>

                      <p><b>8.5</b> We are under no obligation to provide the Service to you at the incorrect (lower) price, even after we have sent you a Order Confirmation, if the pricing error is obvious and unmistakeable and could have reasonably been recognised by you as a mis-pricing.</p>

                      <p><b>8.6</b> Payment for all Services must be by credit or debit card unless otherwise agreed.  We accept payment with Visa, MasterCard and Visa Delta.  We will not charge your credit or debit card until we despatch your order.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">9.0 Our refunds policy</h2>
                      <p><b>9.1</b> When you cancel a service with us:</p>

                      <ul className="blank">
                        <li>(a) because you have cancelled the Contract between us within the seven-day cooling-off period and before the Service is provided, (see clause 6.1 above), we will process the refund due to you as soon as possible and, in any case, within 30 days of the day you have given notice of your cancellation. In this case, we will refund the price of the Service in full.</li>

                        <li>(b) for any other reason (for instance, because have notified us in accordance with paragraph 20 that you do not agree to any change in these terms and conditions or in any of our policies), we will consider your request and will notify you of your refund via e-mail within a reasonable period of time.  We will usually process the refund due to you as soon as possible and, in any case, within 30 days of the day we confirmed to you via e-mail that you were entitled to a refund for the Service.  </li>

                      </ul>

                      <p><b>9.2</b> We will usually refund any money received from you using the same method originally used by you to pay for your purchase.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">10. Our liability</h2>
                      <p><b>10.1</b> We warrant to you that any of the Services purchased from us through our site is of satisfactory quality and reasonably fit for all the purposes for which Services of the kind are commonly supplied.</p>

                      <p><b>10.2</b> Our liability for losses you suffer as a result of us breaking this agreement is strictly limited to the purchase price of the Services you purchased and any losses which are a foreseeable consequence of us breaking the agreement. Losses are foreseeable where they could be contemplated by you and us at the time your order is accepted by us.</p>

                      <p><b>10.3</b> This does not include or limit in any way our liability:</p>

                      <ul className="blank">
                        <li>(a) For death or personal injury caused by our negligence;</li>
                        <li>(b) Under section 2(3) of the Consumer Protection Act 1987; </li>
                        <li>(c) For fraud or fraudulent misrepresentation; or</li>
                        <li>(d) For any matter for which it would be illegal for us to exclude, or attempt to exclude, our liability.</li>
                      </ul>

                      <p><b>10.4</b> We are not responsible for indirect losses which happen as a side effect of the main loss or damage and which are not foreseeable by you and us, including but not limited to:</p>

                      <ul className="blank">
                        <li>(a) loss of income or revenue</li>
                        <li>(b) loss of business</li>
                        <li>(c) loss of profits or contracts</li>
                        <li>(d) loss of anticipated savings</li>
                        <li>(e) loss of data</li>
                        <li>(f) loss of data, or</li>
                        <li>(g) waste of management or office time however arising and whether caused by tort (including negligence), breach of contract or otherwise, even if foreseeable;</li>
                      </ul>

                      <p>provided that this clause 10.4 shall not prevent claims for loss of or damage to your tangible property that fall within the terms of clause 10.1 or clause 10.2 or any other claims for direct financial loss that are not excluded by any of categories (a) to (g) inclusive of this clause 10.4.</p>

                      <p><b>10.5</b> Where you buy any Service from a third party seller through our site, the seller&apos;s individual liability will be set out in the seller&apos;s terms and conditions.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">11. Written communications</h2>

                      <p>Applicable laws require that some of the information or communications we send to you should be in writing.  When using our site, you accept that communication with us will be mainly electronic.  We will contact you by e-mail or provide you with information by posting notices on our website.  For contractual purposes, you agree to this electronic means of communication and you acknowledge that all contracts, notices, information and other communications that we provide to you electronically comply with any legal requirement that such communications be in writing.  This condition does not affect your statutory rights.</p>


                      <h2 className="v2">12. Notices</h2>

                      <p>All notices given by you to us must be given to Live Group at <Link href="/cdn-cgi/l/email-protection#92e1e7e2e2fde0e6d2fefbe4f7f5e0fde7e2bcf1fdbce7f9"><span className="__cf_email__" data-cfemail="186b6d6868776a6c5874716e7d7f6a776d68367b77366d73">[email&#160;protected]</span></Link>. We may give notice to you at either the e-mail or postal address you provide to us when placing an order, or in any of the ways specified in clause 13  above.  Notice will be deemed received and properly served immediately when posted on our website, 24 hours after an e-mail is sent, or three days after the date of posting of any letter.  In proving the service of any notice, it will be sufficient to prove, in the case of a letter, that such letter was properly addressed, stamped and placed in the post and, in the case of an e-mail, that such e-mail was sent to the specified e-mail address of the addressee.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">13. Transfer of rights and obligations</h2>

                      <p><b>13.1</b> The contract between you and us is binding on you and us and on our respective successors and assigns.</p>

                      <p><b>13.2</b> You may not transfer, assign, charge or otherwise dispose of a Contract, or any of your rights or obligations arising under it, without our prior written consent.</p>

                      <p><b>13.3</b> We may transfer, assign, charge, sub-contract or otherwise dispose of a Contract, or any of our rights or obligations arising under it, at any time during the term of the Contract.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">14. Events outside our control</h2>

                      <p><b>14.1</b> We will not be liable or responsible for any failure to perform, or delay in performance of, any of our obligations under a Contract that is caused by events outside our reasonable control (Force Majeure Event).</p>

                      <p><b>14.2</b> A Force Majeure Event includes any act, event, non-happening, omission or accident beyond our reasonable control and includes in particular (without limitation) the following:</p>

                      <ul className="blank">
                        <li>(a) Strikes, lock-outs or other industrial action.</li>
                        <li>(b) Civil commotion, riot, invasion, terrorist attack or threat of terrorist attack, war (whether declared or not) or threat or preparation for war.</li>
                        <li>(c) Fire, explosion, storm, flood, earthquake, subsidence, epidemic or other natural disaster.</li>
                        <li>(d) Impossibility of the use of railways, shipping, aircraft, motor transport or other means of public or private transport.</li>
                        <li>(e) Impossibility of the use of public or private telecommunications networks.</li>
                        <li>(f) The acts, decrees, legislation, regulations or restrictions of any government.</li>
                      </ul>

                      <p><b>14.3</b> Our performance under any Contract is deemed to be suspended for the period that the Force Majeure Event continues, and we will have an extension of time for performance for the duration of that period.  We will use our reasonable endeavours to bring the Force Majeure Event to a close or to find a solution by which our obligations under the Contract may be performed despite the Force Majeure Event.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>

                      <h2 className="v2">15. Waiver</h2>

                      <p><b>15.1</b> If we fail, at any time during the term of a Contract, to insist upon strict performance of any of your obligations under the Contract or any of these terms and conditions, or if we fail to exercise any of the rights or remedies to which we are entitled under the Contract, this shall not constitute a waiver of such rights or remedies and shall not relieve you from compliance with such obligations.</p>

                      <p><b>15.2</b> A waiver by us of any default shall not constitute a waiver of any subsequent default.</p>


                      <h2 className="v2">16. Severability</h2>
                      <p>If any of these terms and Conditions or any provisions of a Contract are determined by any competent authority to be invalid, unlawful or unenforceable to any extent, such term, condition or provision will to that extent be severed from the remaining terms, conditions and provisions which will continue to be valid to the fullest extent permitted by law.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">17.Entire agreement</h2>

                      <p><b>17.1</b> These terms and conditions and any document expressly referred to in them represent the entire agreement between us in relation to the subject matter of any Contract and supersede any prior agreement, understanding or arrangement between us, whether oral or in writing.</p>

                      <p><b>17.2</b> We each acknowledge that, in entering into a Contract, neither of us has relied on any representation, undertaking or promise given by the other or be implied from anything said or written in negotiations between us prior to such Contract except as expressly stated in these terms and conditions.</p>

                      <p>We intend to rely upon these terms and conditions and any document expressly referred to in them in relation to the subject matter of any Contract. While we accept responsibility for statements and representations made by our duly authorised agents, please make sure you ask for any variations from these terms and conditions to be confirmed in writing.</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">18. Our right to vary these terms and conditions</h2>

                      <p><b>18.1</b> We have the right to revise and amend these terms and conditions from time to time to reflect changes in market conditions affecting our business, changes in technology, changes in payment methods, changes in relevant laws and regulatory requirements and changes in our system&apos;s capabilities.</p>

                      <p><b>18.2</b> You will be subject to the policies and terms and conditions in force at the time that you order Services from us, unless any change to those policies or these terms and conditions is required to be made by law or governmental authority (in which case it will apply to orders previously placed by you), or if we notify you of the change to those policies or these terms and conditions before we send you the Order Confirmation (in which case we have the right to assume that you have accepted the change to the terms and conditions, unless you notify us to the contrary within seven working days of receipt by you of the Services).</p>
                      <Link href="#" className="termsbacktotop">Back to top</Link>


                      <h2 className="v2">19. Law and jurisdiction</h2>

                      <p>Contracts for the purchase of Services through our site and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) will be governed by English law.  Any dispute or claim arising out of or in connection with such Contracts or their formation (including non-contractual disputes or claims) shall be subject to the non-exclusive jurisdiction of the courts of England and Wales.</p>

                      <div className='hrgrey'>
                        <hr />
                      </div>
                      <Link href="#" className="termsbacktotop">Back to top</Link>
                    </section>

                    <section id="cookiepolicy" className="page">
                      <h1>Live Group Cookie Policy</h1>

                      <p>This policy sets out how Live Group uses and protects any information that you give to us when you use this website.</p>

                      <p>Live Group is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.</p>

                      <p>We will let you know what information we collect using cookies and similar technologies when you use our website, why we collect it and how we use it to improve your experience.</p>

                      <h2>How we use cookies</h2>

                      <p>A cookie is a small file that is placed on your computer&apos;s hard drive by websites. You can think of cookies as providing a &quot;memory&quot; for the website, enabling it to recognise a user and respond appropriately. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>

                      <p>Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.</p>

                      <p>You can choose to accept or decline cookies. Many web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>

                      <h2>Cookies we use - Anonymous analytics cookies</h2>

                      <p>Google Analytics are the only cookies used for collecting analytics and won&apos;t be used if you choose to reject the cookies from the notice.</p>

                      <p>Every time a user visits our website, web analytics software provided by a third party generates an anonymous analytics cookie. These cookies can tell us whether or not you have visited the site before. Your browser will tell us if you have these cookies, and if you don&apos;t, we generate new ones. This allows us to track how many individual unique users we have, and how often they visit the site. These cookies cannot be used to identify individuals; they are used for statistical purposes only.</p>

                      <h2>Links to other websites</h2>

                      <p>Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.</p>

                      <h2>Controlling your personal information</h2>

                      <p>If you have previously agreed to us using your personal information for certain purposes, you may change your mind at any time by writing to or emailing us at <Link href="/cdn-cgi/l/email-protection#e08481948190928f94858394898f8ea08c89968587928f9590ce838fce958b"><span className="__cf_email__" data-cfemail="0d696c796c7d7f6279686e796462634d61647b686a7f62787d236e62237866">[email&#160;protected]</span></Link></p>

                      <p>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you please write to us.</p>

                      <p>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.</p>

                      <h2>How to turn off cookies</h2>

                      <p>Please use the following link below to disable cookies on your particular browser.</p>

                      <Link href="https://www.wikihow.com/Disable-Cookies">How to disable cookies</Link>

                      <h2>What we collect</h2>

                      <p>We use some essential cookies to make this website work. These cookies do things like remember your progress through a form (for example a registration form). They always need to be on.</p>

                      <h2>Measuring our website usage – Google Analytics</h2>

                      <p>We only use first-party Google Analytics cookies to track anonymous usage statistics and do not collect any personally identifiable information. This helps us analyse data about webpage usage and improve our website and tailor it to your needs.</p>

                      <p>Google Analytics stores information about what pages you visit, how long you are on the site, how you got here and what you click on. We do not allow Google to use or share our analytics data.</p>

                      <p>Google Analytics sets the following first-party cookies:</p>

                      <table>
                        <tr>
                          <th>_Cookie</th>
                          <th>Description</th>
                          <th>Duration</th>
                        </tr>
                        <tr>
                          <td>_ga</td>
                          <td>The _ga cookie, installed by Google Analytics, calculates visitor, session, and campaign data, and also keeps track of site usage for the site&apos;s analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognise unique visitors.</td>
                          <td>2 years</td>
                        </tr>
                        <tr>
                          <td>_utmc</td>
                          <td>The _ga cookie, installed by Google Analytics, calculates visitor, session, and campaign data, and also keeps track of site usage for the site&apos;s analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognise unique visitors.</td>
                          <td>Google Analytics – stores time of site visit</td>
                        </tr>
                      </table>

                      <p>Google Analytics does not collect any personal information, as identified in their privacy policy. Google also offers a browser plugin that allows users to opt out of their analytics.</p>

                      <h2>Running our sites – session cookies</h2>

                      <table>
                        <tr>
                          <th>_Cookie</th>
                          <th>Description</th>
                          <th>Duration</th>
                        </tr>
                        <tr>
                          <td>
                            <div>ARRAffinitySameSite</div>
                            <div>ARRAffinity</div>
                          </td>
                          <td>These are applied when you first load a page on the site (after having accepted Essential Cookies) and are used by our cloud hosting provider (Microsoft Azure) to run the website.</td>
                          <td>Session</td>
                        </tr>
                        <tr>
                          <td>RequestVerificationToken</td>
                          <td>These are security and forgery prevention cookies, preventing Cross Site Request Forgery (CSRF or XSRF) attacks; this prevents an attacker from sending a link to a valid user that then compromises your site access.</td>
                          <td>Session</td>
                        </tr>
                        <tr>
                          <td>
                            <div>ASP.NET_SessionId</div>
                            <div>AuthToken</div>
                          </td>
                          <td>Session cookies are used to authenticate users, allowing them to use features of the website.</td>
                          <td>Session</td>
                        </tr>
                        <tr>
                          <td>GRECAPTCHA</td>
                          <td>The Google ReCaptcha cookie is used to protect certain forms, in this instance, our Contact Form, checking for bots or spammers and preventing them from submitting the form.</td>
                          <td>6 months</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="empty-cell">*</div>
                            <div>_clck</div>
                            <div className="empty-cell">*</div>
                            <div>_clsk</div>
                          </td>
                          <td>
                            <div>Microsoft Clarity cookies</div>
                            <div>Saves User ID and preferences, unique to that site</div>
                            <div className="empty-cell">*</div>
                            <div>Connects multiple page views by a user into a single Clarity session recording</div>
                          </td>
                          <td>
                            <div className="empty-cell">*</div>
                            <div>1 year</div>
                            <div className="empty-cell">*</div>
                            <div>1 day</div>
                          </td>
                        </tr>
                      </table>

                      <h2>Running our sites – session cookies</h2>

                      <p>We are committed to ensuring that your information is secure. To prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>

                      <p>This page was last updated on 28 February 2024.</p>

                      <div className='hrgrey'>
                        <hr />
                      </div>
                      <Link href="#" className="termsbacktotop">Back to top</Link>
                    </section>
                  </div>
                </div>

                {/* <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script> */}


              </ComponentContainer>
            </InnerContainer>
          </Container>
        </OuterContainer>
      </PwaContentContainer>
    </>
  )
}

export default Terms