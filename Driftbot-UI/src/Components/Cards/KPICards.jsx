import { Card, CardContent, Typography } from "@mui/material";

export default function KPICard({
  title,
  value,
  icon,
  color
}) {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 4
      }}
    >
      <CardContent>

        <div className="flex items-center gap-4">

          <div
            className="p-4 rounded-xl"
            style={{
              backgroundColor: color
            }}
          >
            {icon}
          </div>

          <div>

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              {value}
            </Typography>

            <Typography
              color="text.secondary"
            >
              {title}
            </Typography>

          </div>

        </div>

      </CardContent>
    </Card>
  );
}
