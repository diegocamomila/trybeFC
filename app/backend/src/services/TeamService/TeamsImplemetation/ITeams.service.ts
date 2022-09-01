import ITeamsDTO from '../teamsDTO.service';

export default interface ITeamsService {
  listAll(): Promise<ITeamsDTO[]>;
  findById(id: number): Promise<ITeamsDTO | null>
}
