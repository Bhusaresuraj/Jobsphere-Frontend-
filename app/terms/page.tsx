import { Separator } from "@/components/ui/separator"
import { FileText, AlertTriangle, Ban, Scale, Globe, Mail } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Terms of Service</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The rules, guidelines, and agreements to using JobSphere
              </p>
              <p className="text-sm text-muted-foreground">Last updated: March 1, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Introduction */}
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                <FileText className="mr-1 h-4 w-4" />
                <span>Agreement</span>
              </div>
              <p className="text-muted-foreground">
                These Terms of Service ("Terms") govern your access to and use of the JobSphere website, services, and
                applications (collectively, the "Service"). By accessing or using the Service, you agree to be bound by
                these Terms. If you disagree with any part of the terms, you may not access the Service.
              </p>
            </div>

            <Separator />

            {/* Accounts */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Accounts</h2>
              </div>
              <p className="text-muted-foreground">
                When you create an account with us, you must provide information that is accurate, complete, and current
                at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
                termination of your account on our Service.
              </p>
              <p className="text-muted-foreground">
                You are responsible for safeguarding the password that you use to access the Service and for any
                activities or actions under your password, whether your password is with our Service or a third-party
                service.
              </p>
              <p className="text-muted-foreground">
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming
                aware of any breach of security or unauthorized use of your account.
              </p>
            </div>

            <Separator />

            {/* Intellectual Property */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Scale className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Intellectual Property</h2>
              </div>
              <p className="text-muted-foreground">
                The Service and its original content, features, and functionality are and will remain the exclusive
                property of JobSphere and its licensors. The Service is protected by copyright, trademark, and other
                laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in
                connection with any product or service without the prior written consent of JobSphere.
              </p>
              <p className="text-muted-foreground">
                You retain any and all of your rights to any content you submit, post, or display on or through the
                Service, including your interview responses and feedback. By submitting, posting, or displaying content
                on or through the Service, you grant us a worldwide, non-exclusive, royalty-free license to use,
                reproduce, adapt, publish, translate, and distribute your content in any and all media or distribution
                methods.
              </p>
            </div>

            <Separator />

            {/* Prohibited Uses */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Ban className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Prohibited Uses</h2>
              </div>
              <p className="text-muted-foreground">
                You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to
                use the Service:
              </p>
              <ul className="list-disc pl-10 space-y-2 text-muted-foreground">
                <li>
                  In any way that violates any applicable federal, state, local, or international law or regulation.
                </li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                <li>
                  To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                  mail," "chain letter," "spam," or any other similar solicitation.
                </li>
                <li>
                  To impersonate or attempt to impersonate JobSphere, a JobSphere employee, another user, or any other
                  person or entity.
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or
                  which, as determined by us, may harm JobSphere or users of the Service or expose them to liability.
                </li>
              </ul>
              <p className="text-muted-foreground">Additionally, you agree not to:</p>
              <ul className="list-disc pl-10 space-y-2 text-muted-foreground">
                <li>
                  Use the Service in any manner that could disable, overburden, damage, or impair the site or interfere
                  with any other party's use of the Service.
                </li>
                <li>
                  Use any robot, spider, or other automatic device, process, or means to access the Service for any
                  purpose, including monitoring or copying any of the material on the Service.
                </li>
                <li>
                  Use any manual process to monitor or copy any of the material on the Service or for any other
                  unauthorized purpose without our prior written consent.
                </li>
                <li>Use any device, software, or routine that interferes with the proper working of the Service.</li>
                <li>
                  Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or
                  technologically harmful.
                </li>
                <li>
                  Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service,
                  the server on which the Service is stored, or any server, computer, or database connected to the
                  Service.
                </li>
                <li>Attack the Service via a denial-of-service attack or a distributed denial-of-service attack.</li>
                <li>Otherwise attempt to interfere with the proper working of the Service.</li>
              </ul>
            </div>

            <Separator />

            {/* Termination */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Termination</h2>
              </div>
              <p className="text-muted-foreground">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-muted-foreground">
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your
                account, you may simply discontinue using the Service or contact us to request account deletion.
              </p>
              <p className="text-muted-foreground">
                All provisions of the Terms which by their nature should survive termination shall survive termination,
                including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of
                liability.
              </p>
            </div>

            <Separator />

            {/* Limitation of Liability */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Scale className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Limitation of Liability</h2>
              </div>
              <p className="text-muted-foreground">
                In no event shall JobSphere, nor its directors, employees, partners, agents, suppliers, or affiliates,
                be liable for any indirect, incidental, special, consequential or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-10 space-y-2 text-muted-foreground">
                <li>Your access to or use of or inability to access or use the Service;</li>
                <li>Any conduct or content of any third party on the Service;</li>
                <li>Any content obtained from the Service; or</li>
                <li>Unauthorized access, use or alteration of your transmissions or content.</li>
              </ul>
              <p className="text-muted-foreground">
                This limitation of liability section applies whether the alleged liability is based on contract, tort,
                negligence, strict liability, or any other basis, even if JobSphere has been advised of the possibility
                of such damage.
              </p>
            </div>

            <Separator />

            {/* Disclaimer */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Disclaimer</h2>
              </div>
              <p className="text-muted-foreground">
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
                basis. The Service is provided without warranties of any kind, whether express or implied, including,
                but not limited to, implied warranties of merchantability, fitness for a particular purpose,
                non-infringement or course of performance.
              </p>
              <p className="text-muted-foreground">
                JobSphere, its subsidiaries, affiliates, and its licensors do not warrant that:
              </p>
              <ul className="list-disc pl-10 space-y-2 text-muted-foreground">
                <li>
                  The Service will function uninterrupted, secure or available at any particular time or location;
                </li>
                <li>Any errors or defects will be corrected;</li>
                <li>The Service is free of viruses or other harmful components; or</li>
                <li>The results of using the Service will meet your requirements.</li>
              </ul>
            </div>

            <Separator />

            {/* Contact Us */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Contact Us</h2>
              </div>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium">JobSphere, Inc.</p>
                <p className="text-muted-foreground">123 Interview Street</p>
                <p className="text-muted-foreground">San Francisco, CA 94103</p>
                <p className="text-muted-foreground">legal@jobsphere.com</p>
                <p className="text-muted-foreground">1-800-JOBSPHERE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

