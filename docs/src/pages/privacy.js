export function renderPrivacy() {
  return `
    <div>
      <div class="breadcrumbs text-sm mb-6">
        <ul>
          <li><a href="#/">Home</a></li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <article class="prose max-w-none">
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> July 2026</p>

        <h2>Overview</h2>
        <p>
          This website is a personal static site hosted on GitHub Pages. It does not collect,
          store, or process any personal data from visitors.
        </p>

        <h2>Information We Do Not Collect</h2>
        <ul>
          <li>No cookies are set by this site</li>
          <li>No analytics or tracking scripts are used</li>
          <li>No personal information is requested or stored</li>
          <li>No forms collect user data</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>
          This site is hosted on <a href="https://docs.github.com/en/pages" target="_blank" rel="noopener noreferrer">GitHub Pages</a>.
          GitHub may collect technical information such as IP addresses in their server logs as part of their hosting service.
          Please refer to <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub's Privacy Statement</a> for details.
        </p>

        <h2>External Links</h2>
        <p>
          This site contains links to external websites. We are not responsible for the privacy
          practices or content of those sites. We encourage you to review the privacy policies
          of any external sites you visit.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          This privacy policy may be updated from time to time. Any changes will be reflected on this page
          with an updated revision date.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, you can reach out via
          <a href="https://github.com/ajgoldenwings" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </article>
    </div>
  `;
}
