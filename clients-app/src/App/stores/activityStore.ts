import { makeObservable } from "mobx";
import agent from "../api/agent";
import { Activity } from "../Model/Activities";
import { v4 as uuid } from 'uuid';

export default class ActivityStore {
    [x: string]: any;
    activities: Activity[] = [];
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeObservable(this)

    }
    // get activitiesByDate() {
    //     return Array.from(this.activityRegistry.values(().sort((a, b) =>
    //         Date.parse(a.date) - Date.parse(b.date))
    // }
    get groupedActivities() {
        return Object.entries(
            this.activitiesByDate.reduce((activities, activity) => {
                const date = activity.date;
                activities[date] = activities[date] ? [...activities[date], activity] : [activity];
                return activities;

            }, {} as { [Key: string]: Activity[] })
        )

    }

    loadingActivities = async () => {
        this.setLoadingInitial(true);
        try {
            const activities = await agent.Activities.list();
            activities.forEach(activity => {
                this.setActivity(activity);

                // this.activities.push(activity);
            })
            this.setLoadingInitial(false);

        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);

        }
    }
    loadActivity = async (id: string) => {
        let activity = this.getActivity(id);
        if (activity) {
            this.selectedActivity = activity;
            return activity;

        } else {
            this.loadingInitial = true;
            try {
                activity = await agent.Activities.details(id);
                this.setActivity(activity);
                this.setLoadingInitial(false);
                return activity;

            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }

    }
    private setActivity = (activity: Activity) => {
        activity.date = activity.date.split('T')[0];
        this.activityRegistry.set(activity.id, activity);

    }
    private getActivity = (id: string) => {
        return this.activityRegistry.get(id);
    }
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;

    }


}