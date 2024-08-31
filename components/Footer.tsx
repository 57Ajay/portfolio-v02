import Link from "next/link";
import { Github, LinkedinIcon, MailIcon, X } from 'lucide-react'
const Footer = ()=>{
    return(
        <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2024 Ajay Upadhyay. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="https://github.com/57ajay" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-6 h-6" />
                </a>
            </Link>
            <Link href="https://linkedin.com/in/upajay" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <LinkedinIcon className="w-6 h-6" />
                </a>
            </Link>
            <Link href="https://x.com/57ajy" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <X className="w-6 h-6" />
                </a>
            </Link>
            <Link href="mailto:57ajay.u@gmail.com" aria-label="Email">
              <MailIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    )
};

export default Footer;