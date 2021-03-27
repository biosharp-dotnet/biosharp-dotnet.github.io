import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import BioSharpLogoImage from "@site/static/img/biosharp_logo.png";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home Page`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div class="hero shadow--lw">
          <div class="container">
            <div class="row row--no-gutters">
              <div class="col "></div>
              <div class="col col--8">
                {/* <h1 class="hero__title">BioSharp OÜ</h1> */}
                <img src={BioSharpLogoImage} width={234} height={45} />
                <p class="hero__subtitle">
                  We make Bioinformatics simple and easy.
                </p>
                <div>
                  <a
                    class="button button--outline button--secondary"
                    href="https://company.e-resident.gov.ee/company/16019987"
                  >
                    Estonian Marketplace
                  </a>

                  <a
                    class="button button--outline button--secondary"
                    href="https://github.com/biosharp-dotnet"
                  >
                    Github
                  </a>

                  <a
                    class="button button--outline button--secondary"
                    href="https://www.linkedin.com/company/biosharp"
                  >
                    LinkedIn
                  </a>

                  <a
                    class="button button--outline button--secondary"
                    href="https://www.youtube.com/channel/UChZX3OqkjS1SuGV_XPLPZ-Q?view_as=subscriber"
                  >
                    YouTube
                  </a>

                  <a
                    class="button button--outline button--secondary"
                    href="https://www.facebook.com/BioSharp.net/"
                  >
                    Facebook
                  </a>

                  <a
                    class="button button--outline button--secondary"
                    href="https://twitter.com/BioSharp_dotnet"
                  >
                    Twitter
                  </a>
                </div>
              </div>
              <div class="col " />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
