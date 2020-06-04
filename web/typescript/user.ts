// accountInfo
// charInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name: "William",
}

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: "BlackWarrior",
    level: 100
};

// Intersection (Junta dois tipo em um só);
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: 123,
    name: "William",
    nickname: "BlackWarrior",
    level: 100
};