public with sharing class CasePriorityController {
    @AuraEnabled(cacheable=true)
    public static List<Case> getCases() {
        return [
            SELECT Id, CaseNumber, Subject, Status, Priority, CreatedDate
            FROM Case
            WITH USER_MODE
            ORDER BY CreatedDate DESC
            LIMIT 20
        ];
    }

    @AuraEnabled
    public static void updateCasePriority(Id caseId, String priority) {
        if (caseId == null || String.isBlank(priority)) {
            throw new AuraHandledException('Case and Priority are required.');
        }

        Set<String> validPriorities = new Set<String>();
        for (Schema.PicklistEntry entry : Case.Priority.getDescribe().getPicklistValues()) {
            if (entry.isActive()) {
                validPriorities.add(entry.getValue());
            }
        }

        if (!validPriorities.contains(priority)) {
            throw new AuraHandledException('Select a valid Priority.');
        }

        Case caseToUpdate = new Case(Id = caseId, Priority = priority);

        try {
            Database.update(caseToUpdate, AccessLevel.USER_MODE);
        } catch (DmlException error) {
            throw new AuraHandledException('Unable to update Case Priority: ' + error.getDmlMessage(0));
        }
    }
}
