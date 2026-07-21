import { Eye, Edit2, Trash2, ArrowUpDown } from "lucide-react";

export default function Table() {
    const dummyData = [
        { id: 1, name: "PSR-775", type: "Instrument", condition: 3, isBorrowed: false },
        { id: 2, name: "Gitar Akustik Yamaha FS800 Natural Wood", type: "Instrument", condition: 3, isBorrowed: true },
        { id: 3, name: "XLR 5 meter", type: "Sound System", condition: 3, isBorrowed: false },
        { id: 4, name: "Yamaha MGP24X Mixer Audio 24 Channel", type: "Sound System", condition: 2, isBorrowed: false },
        { id: 5, name: "Kabel Instrument 6.35mm 1 meter dasd asdasdasd asdasdas asftdasuydyuas aydgyasugdu asgdyuasgydu asuiygdyuiasgd", type: "Sound System", condition: 1, isBorrowed: false },
        { id: 6, name: "Shure SM58 Dynamic Cardioid Microphone Professional", type: "Sound System", condition: 3, isBorrowed: true },
        { id: 7, name: "Fender Stratocaster Player Series Maple Fingerboard Black", type: "Instrument", condition: 3, isBorrowed: false },
        { id: 8, name: "Korg Chronos 2 Workstation Synthesizer 88-key Piano Keyboard", type: "Instrument", condition: 2, isBorrowed: true },
        { id: 9, name: "Kabel HDMI 10 meter High Speed 4K Gold Plated Connection", type: "Accessories", condition: 3, isBorrowed: false },
        { id: 10, name: "Speaker Aktif JBL EON715 15-inch 1300W Bluetooth PA", type: "Sound System", condition: 3, isBorrowed: false },
        { id: 11, name: "Gitar Bass Ibanez SR300E Iron Pewter Metallic Finish", type: "Instrument", condition: 3, isBorrowed: false },
        { id: 12, name: "Drum Kit Tama Imperialstar 5-piece Wrap Finish Black", type: "Instrument", condition: 2, isBorrowed: false },
        { id: 13, name: "Focusrite Scarlett 2i2 4th Gen USB Audio Interface", type: "Sound System", condition: 3, isBorrowed: false },
        { id: 14, name: "Pioneer DJ DDJ-FLX4 2-deck Controller for Rekordbox", type: "Instrument", condition: 3, isBorrowed: true },
        { id: 15, name: "Kabel Listrik Roll 50 meter Heavy Duty Supreme Cable Corp", type: "Accessories", condition: 1, isBorrowed: false },
        { id: 16, name: "Wireless Mic Sennheiser EW-D SKM-S Base Set Digital", type: "Sound System", condition: 3, isBorrowed: true },
        { id: 17, name: "Moving Head LED Light 150W DMX512 Professional Stage Rigging", type: "Lighting", condition: 2, isBorrowed: false },
        { id: 18, name: "Smoke Machine 1200W Fogger with Wireless Remote Control", type: "Lighting", condition: 1, isBorrowed: false },
        { id: 19, name: "Stand Microphone Boom Hercules MS432B Stage Series Black", type: "Accessories", condition: 3, isBorrowed: false },
        { id: 20, name: "Stand Keyboard Double X-Brace Heavy Duty Adjustable", type: "Accessories", condition: 3, isBorrowed: false },
        { id: 21, name: "Roland SPD-SX PRO Sampling Pad Professional Percussion", type: "Instrument", condition: 3, isBorrowed: false },
        { id: 22, name: "Audio Technica ATH-M50x Professional Monitor Headphones", type: "Sound System", condition: 2, isBorrowed: true },
        { id: 23, name: "DI Box BSS Audio AR-133 Active Active Direct Box", type: "Sound System", condition: 3, isBorrowed: false },
        { id: 24, name: "Kabel Snake 16 Channel XLR to XLR Neutrik Connectors 30m", type: "Sound System", condition: 3, isBorrowed: false },
        { id: 25, name: "Amplifier Gitar Marshall JCM800 2203 Tube Head 100W", type: "Sound System", condition: 3, isBorrowed: true },
        { id: 26, name: "Amplifier Bass Ampeg SVT-CL Classic Series Valve Head", type: "Sound System", condition: 2, isBorrowed: false },
        { id: 27, name: "Behringer X32 Digital Mixer 40-Input 25-Bus Console", type: "Sound System", condition: 3, isBorrowed: false },
        { id: 28, name: "Efek Gitar Line 6 Helix Guitar Multi-FX Processor Floor", type: "Instrument", condition: 3, isBorrowed: false },
        { id: 29, name: "Mic Drum Kit Shure DMK57-52 Premium Microphone Pack", type: "Sound System", condition: 3, isBorrowed: false },
        { id: 30, name: "Power Amplifier Crown XLi 2500 Two-channel 500W at 8-Ohm", type: "Sound System", condition: 1, isBorrowed: false },
        { id: 31, name: "Par LED 54x3W RGBW Stage Wash Lighting Slim Canvas DMX", type: "Lighting", condition: 3, isBorrowed: false },
        { id: 32, name: "Laser Stage Light RGB 1W Animation Projector Program", type: "Lighting", condition: 2, isBorrowed: true },
        { id: 33, name: "Pop Filter Dual Layer Studio Recording Mic Windscreen Shield", type: "Accessories", condition: 3, isBorrowed: false },
        { id: 34, name: "Acoustic Foam Panel 30x30x5cm Soundproofing Studio Grid", type: "Accessories", condition: 3, isBorrowed: false },
        { id: 35, name: "Midi Controller Arturia KeyStep Pro 37-key Polyphonic", type: "Instrument", condition: 3, isBorrowed: false },
        { id: 36, name: "Novation Launchpad X Grid Controller for Ableton Live", type: "Instrument", condition: 2, isBorrowed: false },
        { id: 37, name: "Kabel Speaker Canare 2S7F Speakon to Speakon Premium 15m", type: "Sound System", condition: 3, isBorrowed: false },
        { id: 38, name: "Subwoofer Aktif Mackie Thump118S 18-inch 1400W Rated", type: "Sound System", condition: 3, isBorrowed: true },
        { id: 39, name: "Clapper Board Acrylic Hollywood Director Video Slate Block", type: "Accessories", condition: 1, isBorrowed: false },
        { id: 40, name: "Flightcase Hardcase Universal Multi-Effect / Cable Protection", type: "Accessories", condition: 3, isBorrowed: false }
    ];

    return (
        <div
        className="w-full bg-dark-surface-2 border border-dark-border-soft rounded-2xl shadow-xl overflow-hidden"
        >   
            <div
            className="w-full max-h-[600px] overflow-x-auto overflow-y-auto scrollbar-thin scrollbar-thumb-dark-surface-3 scrollbar-gutter-stable scrollbar-track-dark-surface-2"
            >
                <table
                className="w-full text-left border-collapse table-fixed min-w-200"
                >
                    <thead className="sticky top-0 z-10">
                        <tr
                        className="bg-dark-surface-3 border-b border-dark-border-soft"
                        >
                            <th
                            className="w-[45%] p-4 text-xs font-semibold text-dark-txt-secondary uppercase tracking-wider"
                            >
                                <div
                                className="w-full flex items-center gap-1.5 cursor-pointer hover:text-dark-txt-primary"
                                >
                                    Nama Barang <ArrowUpDown size={12} />
                                </div>
                            </th>
                            <th className="w-[15%] p-4 text-xs font-semibold text-dark-txt-secondary uppercase tracking-wider">Tipe</th>
                            <th className="w-[15%] p-4 text-xs font-semibold text-dark-txt-secondary uppercase tracking-wider text-center">Kondisi</th>
                            <th className="w-[15%] p-4 text-xs font-semibold text-dark-txt-secondary uppercase tracking-wider text-center">Status Peminjaman</th>
                            <th className="w-[10%] p-4 text-xs font-semibold text-dark-txt-secondary uppercase tracking-wider text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-dark-border-soft">
                        {
                            dummyData.map((item) => {
                                return (
                                    <tr
                                    key={item.id}
                                    className="hover:bg-dark-surface-4/25 transition-colors duration-200"
                                    >
                                        <td
                                        className="max-w-0 p-4 text-sm font-medium text-dark-txt-primary truncate"
                                        title={item.name}
                                        >
                                            {item.name}
                                        </td>
                                        <td
                                        className="max-w-0 p-4 text-sm font-medium text-dark-txt-primary truncate"
                                        >
                                            {item.type}
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider
                                                ${item.condition === 1 ? "bg-rose-500/10 text-rose-400" : ""}
                                                ${item.condition === 2 ? "bg-amber-500/10 text-amber-400" : ""}
                                                ${item.condition === 3 ? "bg-emerald-500/10 text-emerald-400" : ""}
                                            `}>
                                                {item.condition === 1 ? "Rusak" : ""}
                                                {item.condition === 2 ? "Perlu Perawatan" : ""}
                                                {item.condition === 3 ? "Baik" : ""}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center tracking-wider">
                                            {item.isBorrowed ? (
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-rose-500/10 text-rose-400">
                                                    Dipinjam
                                                </span>
                                            ) : (
                                                <span className="text-dark-txt-muted font-normal">-</span>
                                            )}
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex flex-row items-center gap-2 justify-end">
                                                <button className="p-1.5 text-dark-txt-secondary hover:text-blue-royal hover:bg-dark-surface-3 rounded-md transition-all cursor-pointer"
                                                title="Lihat Detail"
                                                >
                                                    <Eye size={14} />
                                                </button>
                                                <button className="p-1.5 text-dark-txt-secondary hover:text-blue-royal hover:bg-dark-surface-3 rounded-md transition-all cursor-pointer"
                                                title="Edit"
                                                >
                                                    <Edit2 size={14} />
                                                </button>
                                                <button className="p-1.5 text-dark-txt-secondary hover:text-rose-400 hover:bg-dark-surface-3 rounded-md transition-all cursor-pointer"
                                                title="Hapus"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}