export class Administrateur {
    nom?: string;
    prenom?: string;
    userName?: string;
    id?: string;
    token:string;
    rolesGroupe?: string[] = [];
    profileImgUrl?: string;
    accountStatut?: number;
    phoneNumber?: string;
    updated?: number;
    created?: number;
    isMaster?: boolean;
    uid?: string;
    email?: string;
}