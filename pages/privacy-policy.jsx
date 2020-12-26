import React from "react";

import Headline from "../patterns/headline";
import Image from "../patterns/image";
import Page from "../components/page";
import SubHeadline from "../patterns/sub-headline";
import Text from "../patterns/text";
import Link from "../patterns/link";

const PrivacyPolicy = () => (
  <Page title="privacy policy">
    <Headline>Privacy notice</Headline>
    <Text>
      My website may be used without entering personal information. Information
      is considered personal if it can be associated exclusively to a specific
      natural person. The provisions below serve to provide information as to
      the manner, extent and purpose for collecting, using and processing
      personal information.
    </Text>
    <Text>
      Please be aware that data transfer via the internet is subject to security
      risks and, therefore, complete protection against third-party access to
      transferred data cannot be ensured.
    </Text>
    <SubHeadline id="cookies">Cookies</SubHeadline>
    <Image
      src="/images/cookies.jpg"
      alt="It shows the cookie monster with the sub line: ain't no cookies here"
      width={612}
      height={440}
      caption="A sad cookie monster caused by abstinence of cookies"
    />
    <Text>There are no cookies here. Nothing, zero, nada.</Text>
    <SubHeadline>Analytics</SubHeadline>
    <Text>
      This website uses{" "}
      <Link
        href="https://plausible.io/"
        title="Website of Plausible Analytics providing cookie-less web analytics without collecting personal data."
      >
        Plausible Analytics
      </Link>
      , a privacy-friendly, open source web analytics software hosted inside the
      EU. Plausible Analytics does not track, collect nor store any personal
      data or personally identifiable information. It is GDPR, CCPA and cookie
      law compliant. Read more about{" "}
      <Link
        href="https://plausible.io/data-policy"
        title="Link to Plausible data policy site."
      >
        Plausible Data Policy
      </Link>{" "}
      or have a direct look at the{" "}
      <Link
        href="https://plausible.io/martin-fieber.de"
        title="Public analytics dashboard of martin-fieber.de."
      >
        public dashboard of this website
      </Link>
      .
    </Text>
    <SubHeadline>Information/Cancellation/Deletion</SubHeadline>
    <Text>
      You may contact my at no cost if you have questions relating to the
      collection, processing or use of your personal information, if you wish to
      request the correction, blocking or deletion of the same, or if you wish
      to cancel explicitly granted consent. Please note that you have the right
      to have incorrect data corrected or to have personal data deleted, where
      such claim is not barred by any legal obligation to retain this data.
    </Text>
  </Page>
);

export default PrivacyPolicy;
