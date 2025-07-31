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
      {/* Upload dialog centered with dark background */}
      <div className="flex justify-center bg-gray-900 p-4">
        <div className="rounded-md bg-gray-800 p-2 shadow-md">
          <UploadDialog />
        </div>
      </div>

      {/* Image gallery */}
      <div className="flex flex-wrap justify-center gap-6 bg-gray-900 p-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="flex w-64 flex-col items-center overflow-hidden rounded-md bg-gray-800 shadow-md"
          >
            <div className="flex aspect-video items-center justify-center bg-gray-900">
              <img
                src={image.url}
                alt={`Image ${image.id}`}
                className="h-full w-full object-contain object-top"
              />
            </div>
            <div className="w-full bg-gray-800 py-2 text-center text-sm text-gray-300">
              {image.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-900 px-4 py-8 text-white sm:px-6 sm:py-12">
      <SignedOut>
        <div className="w-full max-w-md space-y-4 text-center">
          <h1 className="text-2xl font-semibold sm:text-3xl">
            You're not signed in
          </h1>
          <p className="text-base text-gray-400 sm:text-lg">
            Please sign in above to continue.
          </p>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="w-full max-w-3xl space-y-6 text-center">
          <h1 className="text-2xl font-semibold sm:text-3xl">Welcome back!</h1>
          <Images />
        </div>
      </SignedIn>
    </main>
  );
}
