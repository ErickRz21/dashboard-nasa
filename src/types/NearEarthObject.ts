export interface NearEarthObject {
  id: string;
  name: string;
  absolute_magnitude_h: number;
  is_potentially_hazardous_asteroid: boolean;

  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };

  close_approach_data: Array<{
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    relative_velocity: {
      kilometers_per_hour: string;
      kilometers_per_second: string;
    };
    miss_distance: {
      kilometers: string;
      lunar: string;
    };
    orbiting_body: string;
  }>;
}
