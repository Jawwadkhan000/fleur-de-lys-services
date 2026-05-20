import mraLogo from "../../assets/images/mra-logo.png";
import servsafeLogo from "../../assets/images/sersafe-logo.png";
import { motion } from "framer-motion";

function Certify() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] py-14 sm:py-16 lg:py-20 text-white">
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-10 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-gray-300/10 blur-3xl"></div>
      <div className="absolute right-[-100px] bottom-0 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-white/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] border border-white/10 bg-gradient-to-br from-[#161616] via-[#121212] to-[#1a1a1a] p-5 sm:p-8 md:p-10 lg:p-12">
          {/* Small Blur Accent */}
          <div className="absolute top-0 right-0 h-44 w-44 sm:h-60 sm:w-60 bg-green-500/10 blur-3xl"></div>

          {/* Top Content */}
          <div className="relative z-10 mb-8 sm:mb-10 lg:mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] sm:tracking-[0.3em] text-gray-400">
                Trusted & Certified
              </p>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Industry Recognition
                <span className="block text-gray-400">
                  & Professional Standards
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm sm:text-base leading-relaxed text-white/60">
              Fleur is proudly associated with trusted restaurant industry
              organizations and recognized certifications that reinforce
              operational excellence and hospitality expertise.
            </p>
          </div>

          {/* Certification Cards */}
          <div className="relative z-10 grid gap-5 sm:gap-6 lg:grid-cols-2">
            {/* MRA Card */}
            <motion.a
              href="https://www.morestaurants.org/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
                <div className="flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-4 shadow-lg">
                  <img
                    src={mraLogo}
                    alt="Missouri Restaurant Association"
                    className="max-h-14 sm:max-h-16 w-auto object-contain"
                  />
                </div>

                <div className="flex-1">
                  <p className="mb-2 text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.25em] text-gray-400">
                    Official Member
                  </p>

                  <h3 className="mb-2 text-xl sm:text-2xl font-bold leading-tight">
                    Missouri Restaurant Association
                  </h3>

                  <p className="text-sm leading-relaxed text-white/60">
                    Registered association member supporting restaurant growth,
                    hospitality standards, and operational development.
                  </p>
                </div>
              </div>
            </motion.a>

            {/* ServSafe Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
                <div className="flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-4 shadow-lg">
                  <img
                    src={servsafeLogo}
                    alt="ServSafe Certified"
                    className="max-h-12 sm:max-h-14 w-auto object-contain"
                  />
                </div>

                <div className="flex-1">
                  <p className="mb-2 text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.25em] text-gray-400">
                    Certified Professional
                  </p>

                  <h3 className="mb-2 text-xl sm:text-2xl font-bold leading-tight">
                    ServSafe Certified
                  </h3>

                  <p className="text-sm leading-relaxed text-white/60">
                    Certified in restaurant safety, food handling standards,
                    operational hygiene, and professional hospitality practices.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 mt-6 sm:mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 sm:px-6 py-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-white">
                Registered Member ID
              </p>

              <p className="text-sm sm:text-base text-white/60">
                Missouri Restaurant Association · 11171
              </p>
            </div>

            <div className="h-px w-full bg-white/10 md:hidden"></div>

            <div className="text-left md:text-right">
              <p className="text-sm font-medium text-white">
                Commercial Real Estate Transactions
              </p>

              <p className="text-sm sm:text-base text-white/60">
                Licensed through Brennan Giesler with Holman Partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certify;