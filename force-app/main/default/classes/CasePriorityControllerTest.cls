@IsTest
private class CasePriorityControllerTest {
    @TestSetup
    static void createCases() {
        insert new List<Case>{
            new Case(Subject = 'Priority test one', Status = 'New', Origin = 'Phone', Priority = 'Low'),
            new Case(Subject = 'Priority test two', Status = 'New', Origin = 'Web', Priority = 'Medium')
        };
    }

    @IsTest
    static void getCasesReturnsRecentCases() {
        Test.startTest();
        List<Case> cases = CasePriorityController.getCases();
        Test.stopTest();

        System.assert(cases.size() >= 2, 'Expected recently created Cases.');
        System.assertNotEquals(null, cases[0].CaseNumber);
    }

    @IsTest
    static void updateCasePriorityUpdatesRecord() {
        Case testCase = [SELECT Id FROM Case WHERE Subject = 'Priority test one' LIMIT 1];

        Test.startTest();
        CasePriorityController.updateCasePriority(testCase.Id, 'High');
        Test.stopTest();

        Case updatedCase = [SELECT Priority FROM Case WHERE Id = :testCase.Id];
        System.assertEquals('High', updatedCase.Priority);
    }

    @IsTest
    static void updateCasePriorityRejectsInvalidInput() {
        try {
            CasePriorityController.updateCasePriority(null, null);
            System.assert(false, 'Expected an AuraHandledException.');
        } catch (AuraHandledException expected) {
            System.assertNotEquals(null, expected);
        }
    }
}
