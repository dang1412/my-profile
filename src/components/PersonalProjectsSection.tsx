
import { ExternalLink } from "lucide-react"
import Markdown from 'react-markdown'

const projects = [
  {
    name: "PixelGame",
    short: "NFT advertisement Billboard with games.",
    description: `
The idea was building an advertisement billboard where advertiser can own a piece of it as an NFT on the Blockchain and introduce images with link on that piece.
Games are built onto the billboard with incentive to attract users come to play or watch competition in realtime/replay.

**Features**

- Real-time multiplayer games using WebRTC, handshake steps are done though Blockchain events.
- Network, game performance optimization with encoding/decoding gameplay data with ArrayBuffer.
- Path finding, Ray casting, Collision detection,...algorithms.
    `,
    techs: ["Next.js", "Pixi.js", "WebRTC", "Solidity", "EVM"],
    url: "https://pixel-evm.web.app/"
  },
  {
    name: "Blog Website",
    short: "A personal blog website to share knowledge.",
    techs: ["Docusaurus", "React-markdown",],
    description: `
I love sharing knowledge and experiences on my blog website. I write about Web3 programming, defi hacks, algorithms and other interesting topics.

**Features**

- Sonne finance (Compound v2 fork) empty pool attack.
- Hedgey Finance attack.
- Prismafi attack.
- Contract upgradable diamond pattern EIP-2535.
    `,
    url: "https://codetube.vn/blog"
  },
  {
    name: "Algorithms Visualization",
    short: "Step by step visualization of data structures and algorithms.",
    techs: ["D3.js", "React", "Data Structures", "Algorithms"],
    description: `
Step-by-step interactive visualization and animation showing how complex data structures and algorithms work under the hood with D3.js.

**Features**

- Sorting
- [Binary Tree](https://codetube.vn/visualgo/Tree/binary-search-tree)
- [Red-Black Tree](https://codetube.vn/visualgo/Tree/red-black-tree)
- [Btree](https://codetube.vn/visualgo/Tree/btree)
- [Graph](https://codetube.vn/visualgo/Graph/graph-bfs)
    `,
    url: "https://codetube.vn/visualgo"
  },
  {
    name: "Pixelland",
    short: "The older version of PixelGame.",
    techs: ["Pixi.js", "Rust", "Polkadot", "Substrate", "Ink!", "Nakama"],
    description: `
This is a Polkadot/Substrate based games and NFT project.
Users can mint pixels on map as NFTs, use for advertisement or sell them on marketplace.
Users can also play games on the map, and earn tokens as rewards, paid by advertiser.

**Features**
- Games: lottery, adventure, 2d shooter.
- Ink! contracts, substrate pallet.
- Nakama server for real-time multiplayer games.
- ERC721, ERC1155, NFT marketplace.

    `,
    url: "https://pixel-app-b8284.web.app/"
  },
  {
    name: "Substrate Frontier",
    short: "Make Substrate blockchain compatible with EVM contract and Metamask.",
    techs: ["Substrate", "Rust", "Solidity", "EVM"],
    description: `
A FRAME-based Substrate node with the Ethereum RPC support.
    `,
    url: "https://github.com/dang1412/substrate-frontier-tutorial"
  },
  {
    name: "ExchangeCompare",
    short: "Real-time crypto prices from multiple exchanges.",
    techs: ["D3.js", "Tradingview", "Orderbook"],
    description: `
Prices, orderbooks are feeded from self created [ccex-api](https://github.com/dang1412/ccex-api)
    `,
    url: "https://exchange-compare.web.app/"
  },
  {
    name: "DayCalendar",
    short: "Display events on a day calendar.",
    techs: ["Javascript", "Html", "Css"],
    description: `
Algorithm which helps display events on a day calendar, using up space dynamically without overlapping.
    `,
    url: "https://dang1412.github.io/day-calendar/"
  },
];

const PersonalProjectsSection = () => (
  <section className="bg-white/80 rounded-xl shadow-md px-6 py-6 mb-8 font-inter max-w-3xl mx-auto animate-fade-in">
    <h3 className="text-2xl font-bold mb-2">Personal Projects</h3>
    <div className="mb-2">I love building interesting things in my free time, and sharing knowledge on my blog website.</div>
    <hr className="mb-2"/>
    <ul className="space-y-5">
      {projects.map((project, idx) => (
        <li key={idx} className="border-b last:border-b-0 pb-4 last:pb-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <span className="text-lg font-semibold">{project.name}</span>
              <p className="text-gray-700">{project.short}</p>
              <div className="text-sm text-gray-600 mt-1">
                <Markdown>
                  {project.description}
                </Markdown>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techs && project.techs.map((tech, i) => (
                  <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm items-center gap-1 text-primary hover:underline font-medium mt-1 md:mt-0"
            >
              <ExternalLink className="inline" size={16} />
            </a>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default PersonalProjectsSection;
