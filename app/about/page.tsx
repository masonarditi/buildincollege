/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
export default function AboutPage() {
    return (
      <div className="flex justify-center pt-16">
        <div className="w-2/3 flex gap-8 p-8 rounded-lg border shadow-sm">
          <div className="w-1/3">
            <img 
              src="/mason.jpeg"
              alt="Mason"
              className="rounded-lg w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="w-2/3">
            <div className="text-md space-y-4.5">
              <p className="font-medium">about the guy who made this</p>
              <p>what's up, i'm mason. i'm 19 years old and a student at berkeley.</p>
              
              <p>i learned to code during my first semester in college, and since then i've been building nonstop.</p>
              
              <p>some of my projects include a <a href="https://tinyurl.com/moffittstatuspmf" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">library tracking app</a> acquired by uc berkeley, a <a href="https://www.calrank.live/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">club ranking website</a> that got 40k users in 3 hours (until someone deleted out db with a sql injection xD), and <a href="https://tinyurl.com/aibjglasses" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">blackjack meta glasses</a> that count cards for you. </p>

              <p>i also like to <a href="https://tinyurl.com/doublekfchina" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">skateboard</a></p>
              
              <p>i started <span className="font-medium">Build in College</span> because i want to meet other students who are building cool stuff in college (or high school).</p>
              
              <p>so, if you have suggestions or just wanna chat, feel free to reach out!</p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="mailto:masonarditi@berkeley.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/masonarditi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a 
                  href="https://x.com/createdbymason"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>

              </div>
          </div>
        </div>
      </div>
    );
  }





  