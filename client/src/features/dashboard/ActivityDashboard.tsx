import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityFilter from "./ActivityFilter";

export default function ActivityDashboard() {
    return (
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            <Grid size={8}><ActivityList /></Grid>
            <Grid size={5}><ActivityFilter /></Grid>
        </Grid>
    )
}