interface Council
{
    code: string;
    frequencies: string[];
    canUseInstalmentNumber: boolean;
    canUseInstalmentPrice: boolean;
    maxOutstandingOnOnePin: number;
    maxOutstandingOnMultiplePin: number;
}

const Brisbane: Council = {
    code: "BC",
    frequencies: ["week", "fortnight", "month"],
    canUseInstalmentNumber: true,
    canUseInstalmentPrice: true,
    maxOutstandingOnOnePin: 200,
    maxOutstandingOnMultiplePin: -1
}

const Stonnington: Council = {
    code: "ST",
    frequencies: ["week", "fortnight", "month"],
    canUseInstalmentNumber: true,
    canUseInstalmentPrice: true,
    maxOutstandingOnOnePin: -1,
    maxOutstandingOnMultiplePin: 2900
}

const PortPhillip: Council = {
    code: "PP",
    frequencies: ["fortnight", "month"],
    canUseInstalmentNumber: true,
    canUseInstalmentPrice: true,
    maxOutstandingOnOnePin: -1,
    maxOutstandingOnMultiplePin: 2900
}

const Geelong: Council = {
    code: "GC",
    frequencies: ["fortnight"],
    canUseInstalmentNumber: true,
    canUseInstalmentPrice: false,
    maxOutstandingOnOnePin: -1,
    maxOutstandingOnMultiplePin: 600
}

const Hume: Council = {
    code: "HU",
    frequencies: ["week", "fortnight", "month"],
    canUseInstalmentNumber: true,
    canUseInstalmentPrice: true,
    maxOutstandingOnOnePin: -1,
    maxOutstandingOnMultiplePin: -1
}

export { Brisbane, Stonnington, PortPhillip, Geelong, Hume };
export type { Council };