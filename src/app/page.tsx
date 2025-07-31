import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { UploadButton } from "~/utils/uploadthing";
import { UploadDialog } from "./_components/upload-dialog";

async function Images() {
  const mockUrls = [
    "https://variety.com/wp-content/uploads/2024/09/Final-Jennie-Partnership-Announce-Photo-PC_-Songyi-Yoon-e1725833165699.png?w=985&h=657&crop=1&resize=910%2C607",
    "https://www.rollingstone.com/wp-content/uploads/2023/12/JennieKim.jpeg?w=1581&h=1054&crop=1",
    "https://www.rollingstone.com/wp-content/uploads/2023/06/Jennie-Leaves-Blackpink-Show-Mid-Set-2.jpg?w=1581&h=1054&crop=1",
    "https://iirusjc70x.ufs.sh/f/p0q05Sv8S72gc7Exct4HZgRe5lFY2Edt0rqymLiCh1uvNAa3",
  ];

  const images = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <div>
      <div className="flex justify-end p-4">
        <UploadDialog />
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-64 flex-col">
            <div className="bg-zinc bg aspect-video bg-zinc-900">
              <img
                src={image.url}
                alt={"Image $(image.id)"}
                className="h-full w-full object-contain object-top"
              />
            </div>
            <div className="text-center">{image.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please Sign In Above to Continue!
        </div>
      </SignedOut>
      <SignedIn>
        <div className="h-full w-full text-center text-2xl">Welcome, User!</div>
        <Images />
      </SignedIn>
    </main>
  );
}
