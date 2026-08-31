interface Council
{
    code: string;
    frequencies: string[];
    canUseInstalmentNumber: boolean; // number of instalments
    canUseInstalmentPrice: boolean; // the price of the instalmenets
    confirmIsMultipleInfringements: boolean; // if we need to check whether there are multiple pins
    maxOutstandingOnOnePin: number; // we will hard cap at this number and raise an error if it is unticked "is multiple infringements"
    maxOutstandingOnMultiplePin: number; // we will 
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