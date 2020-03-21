import React from "react";

import Address from "../patterns/address";
import Headline from "../patterns/headline";
import Page from "../components/page";
import SubHeadline from "../patterns/sub-headline";
import Text from "../patterns/text";
import TextHeading from "../patterns/text-heading";

const LegalNotice = () => (
  <Page title="legal notice">
    <Headline>Legal notice</Headline>
    <Address>
      Martin Helmut Fieber
      <br />
      Nybergsgatan 10
      <br />
      11445 Stockholm
      <br />
      Sweden
    </Address>
    <SubHeadline id="contact">Contact</SubHeadline>
    <Text>
      Telephone: +46 723 996110
      <br />
      E-Mail: info@martin-fieber.se
      <br />
      Website: https://martin-fieber.se
    </Text>
    <SubHeadline id="disclaimer">Disclaimer</SubHeadline>
    <TextHeading id="accountability-for-content">
      Accountability for content
    </TextHeading>
    <Text>
      The contents of my pages have been created with the utmost care. However,
      I cannot guarantee the contents&apos; accuracy, completeness or
      topicality. According to statutory provisions, I&apos;m furthermore
      responsible for my own content on these web pages. In this context, please
      note that I&apos;m accordingly not obliged to monitor merely the
      transmitted or saved information of third parties, or investigate
      circumstances pointing to illegal activity. My obligations to remove or
      block the use of information under generally applicable laws remain
      unaffected by this.
    </Text>
    <TextHeading id="accountability-for-links">
      Accountability for links
    </TextHeading>
    <Text>
      Responsibility for the content of external links (to web pages of third
      parties) lies solely with the operators of the linked pages. No violations
      were evident to my at the time of linking. Should any legal infringement
      become known to my, I will remove the respective link immediately.
    </Text>
    <TextHeading id="copyright">Copyright</TextHeading>
    <Text>
      Unless expressly permitted by law, every form of utilizing, reproducing or
      processing works subject to copyright protection on my web pages requires
      the prior consent of the respective owner of the rights. Individual
      reproductions of a work are allowed only for private use, so must not
      serve either directly or indirectly for earnings.
    </Text>
  </Page>
);

export default LegalNotice;
