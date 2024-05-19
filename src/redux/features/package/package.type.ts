export interface ISubPackage {
  id: string;
  name: string;
  package_id: string;
}

export interface IPackage {
  data: {
    id: string;
    name: string;
    price: number;
    active: boolean;
    description: string;
    start_date: string;
    end_date: string;
    active_days: string[];
    limit: number;
    child_packages?: ISubPackage[];
  }[];
}
