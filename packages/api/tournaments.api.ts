export interface GetTournamentByOrganizationAndName {
  name: string;
  desription: string | null;
  startTime: Date;
  checkInTime: Date;
  bannerBackground: string;
  bannerTextColor: string;
  organizer: {
    name: string;
    discordInvite: string;
    twitter: string | null;
    nameForUrl: string;
  };
}
