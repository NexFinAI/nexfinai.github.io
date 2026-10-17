import { CONTACT_URL, GITHUB_URL, LINKEDIN_URL } from '../config/site'
import { ButtonLink } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { IconGithub, IconLinkedin, IconMail } from '../components/icons'

/** Disabled placeholder button for channels that don't exist yet. */
function SoonButton({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <span
      title="Coming soon"
      className="inline-flex cursor-default items-center justify-center gap-2 rounded-none border border-edge/60 px-6 py-3 text-[0.95rem] font-medium text-mist/60"
    >
      {icon}
      {label} — soon
    </span>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-edge/50 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-signal">
              <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-signal/80" />
              Contact
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.6rem]">
              Get in Touch
            </h2>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-signal">
              Explore · Research · Build
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-7 space-y-4 text-pretty text-[0.98rem] leading-relaxed text-mist">
              <p>
                We welcome conversations with researchers, engineers, and developers interested in
                AI, quantitative finance, digital assets, and open-source financial technology.
              </p>
              <p>
                If you are exploring related research questions, building relevant tools, or
                interested in technical collaboration, we would be glad to connect.
              </p>
              <p className="font-medium text-fog">
                Follow our work, explore our projects, and join us in investigating the next
                generation of financial research systems.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href={GITHUB_URL} size="lg" icon={<IconGithub className="h-4 w-4" />}>
                GitHub
              </ButtonLink>
              {LINKEDIN_URL ? (
                <ButtonLink
                  href={LINKEDIN_URL}
                  size="lg"
                  variant="secondary"
                  icon={<IconLinkedin className="h-4 w-4" />}
                >
                  LinkedIn
                </ButtonLink>
              ) : (
                <SoonButton label="LinkedIn" icon={<IconLinkedin className="h-4 w-4" />} />
              )}
              {CONTACT_URL ? (
                <ButtonLink
                  href={CONTACT_URL}
                  size="lg"
                  variant="secondary"
                  icon={<IconMail className="h-4 w-4" />}
                >
                  Contact Email
                </ButtonLink>
              ) : (
                <SoonButton label="Contact Email" icon={<IconMail className="h-4 w-4" />} />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
