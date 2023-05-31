/** Copyright (c) 2023 Rohan Khayech */
import { 
    Card, 
    CardContent, 
    Icon, 
    IconButton, 
    Link, 
    Stack, 
    Tooltip, 
    Typography 
} from "@mui/material";
import TagChipGroup from "./TagChipGroup";
import Project from "@/model/Project";

/**
 * UI component that displays a software project, featuring clickable categories.
 * @param props.project The software project to display.
 * @param props.onTypeClick Called when the project type icon is clicked.
 * @param props.onLangClick Called when the specified language is clicked.
 * @param props.onPlatClick Called when the specified platform is clicked.
 * @param props.onFrameworkClick Called when the specified framework is clicked.
 * 
 * @author Rohan Khayech
 */
export default function ProjectCard(props: {
    project: Project,
    onTypeClick: () => void,
    onLangClick: (item: string) => void,
    onPlatClick: (item: string) => void,
    onFrameworkClick: (item: string) => void,
}): JSX.Element {

    // Project type icon
    let icon: string
    switch (props.project.type) {
        case "Application": icon = "web_asset"; break;
        case "Library": icon = "collections_bookmark"; break;
        case "University Project": icon = "history_edu"; break;
        case "Project": icon = "book";
    }

    // Component
    return (
        <Card style={{ height: '100%', width: '100%' }} variant="outlined">
            <CardContent style={{ height: '100%' }}>
                <Stack style={{ height: '100%' }} direction="column" justifyContent="space-between" spacing={2}>
                    <Stack direction="column" spacing={1}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Tooltip title={props.project.type} placement="top">
                                <IconButton sx={{padding: 0}} onClick={props.onTypeClick}>
                                    <Icon baseClassName="material-icons-outlined" fontSize="small">{icon}</Icon>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="View on GitHub" placement="top">
                                <Link variant="subtitle1" href={props.project.url}>{props.project.name}</Link>
                            </Tooltip>
                        </Stack>
                        <Typography variant="body2">{props.project.desc}</Typography>
                    </Stack>
                    <Stack direction="column" spacing={1}>
                        <TagChipGroup items={props.project.langs} keyPrefix="lg" title="Languages" leadingIcon="data_object" onClick={props.onLangClick} />
                        <TagChipGroup items={props.project.platforms} keyPrefix="pf" title="Platforms" leadingIcon="devices" onClick={props.onPlatClick} />
                        <TagChipGroup items={props.project.frameworks} keyPrefix="fw" title="Frameworks/Libraries" leadingIcon="dynamic_form" onClick={props.onFrameworkClick} />
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

