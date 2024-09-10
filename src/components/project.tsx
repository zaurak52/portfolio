/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  title: string;
  description: string;
  details: string;
  tantou: string;
  personal: string;
  languages: string;
  imgUrl: string;
  githubLink: string;
  award: string;
};

export const Project = (props: Props) => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md">
      <div className="flex flex-col items-start space-y-4">
        <div>
          <h3 className="text-2xl font-bold mb-2">{props.title}</h3>
          <p className="text-gray-700">{props.description}</p>
          <div className="font-bold">{props.award}</div>
        </div>
        <div className="flex items-center justify-between w-full">
          <Dialog>
            <DialogContent className="sm:max-w-[75vw] sm:h-[80vh]">
              <DialogHeader>
                <DialogTitle
                  className="text-left"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    textAlign: "left",
                  }}
                >
                  {props.title}
                  <div>
                    <DialogDescription
                      className="text-wrap"
                      style={{
                        fontSize: "1.25rem",
                        lineHeight: "1.75rem",
                        fontFamily: "body",
                        textAlign: "left",
                      }}
                    >
                      {props.description}
                    </DialogDescription>
                    <div>{props.award}</div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="flex gap-4 py-6 h-full overflow-y-auto">
                <div className="w-1/2 h-full overflow-y-auto">
                  <img
                    className="rounded-md w-full h-auto max-h-full"
                    src={props.imgUrl}
                    alt="Project image"
                    style={{
                      objectFit: "contain",
                      objectPosition: "bottom",
                    }}
                  />
                </div>
                <div className="list-none">
                  <div style={{ whiteSpace: "pre-wrap" }}>{props.details}</div>
                  <div style={{ whiteSpace: "pre-wrap" }}>{props.tantou}</div>
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    {props.languages}
                  </div>
                </div>
              </div>
            </DialogContent>
            <DialogTrigger asChild>
              <Button>View Details</Button>
            </DialogTrigger>
          </Dialog>
        </div>
        <img
          alt="Project 1"
          className="w-full h-[250px] rounded-xl"
          height={450}
          src={props.imgUrl}
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          width={800}
        />
      </div>
    </div>
  );
};

// function ChevronRightIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m9 18 6-6-6-6" />
//     </svg>
//   );
// }

// function GithubIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//       <path d="M9 18c-4.51 2-5-2-7-2" />
//     </svg>
//   );
// }

// function LinkedinIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//       <rect width="4" height="12" x="2" y="9" />
//       <circle cx="4" cy="4" r="2" />
//     </svg>
//   );
// }

// function TwitterIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//     </svg>
//   );
// }
